-- IMV Hub — Migration v1
-- Rodar no Supabase SQL Editor: https://supabase.com/dashboard/project/mdwnsmelijqyzfewey/sql

-- 1. Tabela profiles (estende auth.users com role)
CREATE TABLE IF NOT EXISTS profiles (
  id    UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name  TEXT NOT NULL DEFAULT '',
  role  TEXT NOT NULL DEFAULT 'viewer'
    CHECK (role IN ('viewer', 'admin'))
);

-- 2. Trigger: cria perfil automaticamente ao criar usuário
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    'viewer'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- 3. Tabela materials
CREATE TABLE IF NOT EXISTS materials (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT        NOT NULL,
  description TEXT        NOT NULL    DEFAULT '',
  type        TEXT        NOT NULL    DEFAULT 'outro'
    CHECK (type IN ('pesquisa', 'pauta', 'estrategia', 'campanha', 'outro')),
  status      TEXT        NOT NULL    DEFAULT 'rascunho'
    CHECK (status IN ('rascunho', 'ativo', 'arquivado')),
  author      TEXT        NOT NULL,
  path        TEXT        NOT NULL    UNIQUE,
  featured    BOOLEAN     NOT NULL    DEFAULT false,
  tags        TEXT[]      NOT NULL    DEFAULT '{}',
  resultado   TEXT,
  created_at  TIMESTAMPTZ NOT NULL    DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL    DEFAULT now()
);

-- 4. Trigger: auto-atualiza updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS materials_updated_at ON materials;
CREATE TRIGGER materials_updated_at
BEFORE UPDATE ON materials
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 5. RLS em profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "profiles_self_read" ON profiles;
CREATE POLICY "profiles_self_read" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- 6. RLS em materials
ALTER TABLE materials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "materials_authenticated_read" ON materials;
CREATE POLICY "materials_authenticated_read" ON materials
  FOR SELECT TO authenticated USING (true);

-- Políticas de escrita separadas por operação (FOR ALL causa recursão via profiles)
DROP POLICY IF EXISTS "materials_admin_insert" ON materials;
CREATE POLICY "materials_admin_insert" ON materials
  FOR INSERT TO authenticated
  WITH CHECK (
    (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
  );

DROP POLICY IF EXISTS "materials_admin_update" ON materials;
CREATE POLICY "materials_admin_update" ON materials
  FOR UPDATE TO authenticated
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin')
  WITH CHECK ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

DROP POLICY IF EXISTS "materials_admin_delete" ON materials;
CREATE POLICY "materials_admin_delete" ON materials
  FOR DELETE TO authenticated
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- 7. Seed inicial
INSERT INTO materials (title, description, type, status, author, path, featured, tags)
VALUES
  (
    'Inteligência Competitiva — Maio/2026',
    'Panorama de mercado, mapeamento de concorrentes, análise de anúncios Meta e recomendações estratégicas para a Turma Set/2026.',
    'pesquisa', 'ativo', 'Gustavo Cesar',
    '/inteligencia-competitiva', true,
    ARRAY['Maio 2026', 'Dr. Diogo', 'Turma 2026']
  ),
  (
    'Pauta de Gravação — 29 de Maio de 2026',
    '10 posts para sessão de gravação: 5 Reels IMV Academy + 5 Reels IMV. Conteúdo orgânico e criativos de ad para Junho.',
    'pauta', 'ativo', 'Gustavo Cesar',
    '/pauta-gravacao', false,
    ARRAY['Maio 2026', 'Gravação', 'Turma 2026']
  )
ON CONFLICT (path) DO NOTHING;

-- 8. Promover usuário a admin (rodar manualmente após criar o usuário)
-- UPDATE profiles SET role = 'admin' WHERE id = '[uuid do usuário]';
