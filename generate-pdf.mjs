import { chromium } from "/Volumes/eusougustavocesar/Projetos/recon/node_modules/playwright/index.mjs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "IMV-Academy-Inteligencia-Competitiva-Maio2026.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();

console.log("Abrindo página...");
await page.goto("http://localhost:3002/inteligencia-competitiva", {
  waitUntil: "networkidle",
  timeout: 30000,
});

// Aguarda fontes e imagens carregarem
await page.waitForTimeout(2000);

console.log("Gerando PDF...");
await page.pdf({
  path: OUTPUT,
  format: "A4",
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
  printBackground: true,
  preferCSSPageSize: false,
});

await browser.close();
console.log(`PDF gerado: ${OUTPUT}`);
