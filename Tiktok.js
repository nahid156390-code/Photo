import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';
import chalk from 'chalk';
import fs from 'fs';
import gradient from 'gradient-string';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Banner as seen in your screenshots
const banner = `
•██ ██ █▌▄▌▪•██ ▪ █▌▄▌▪ ▐█ ▀█▪█▪██▌██• █▌▄▌▪ ▀▄ █·▀▄.▀·▐█ ▄█▪ ▀▄ █·•██
         TikTok Mass Report Tool | Made by MEHDI
-----------------------------------------------------------------------`;

console.log(gradient.atlas(banner));

// Function to get fresh proxies automatically
async function updateProxies() {
    try {
        const res = await fetch("https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all");
        const body = await res.text();
        fs.writeFileSync('proxies.txt', body);
        console.log(chalk.green("[+] Proxies updated successfully!"));
    } catch (err) {
        console.log(chalk.red("[-] Failed to fetch new proxies."));
    }
}

async function startReporting(target, threads) {
    if (!fs.existsSync('proxies.txt')) await updateProxies();
    const proxies = fs.readFileSync('proxies.txt', 'utf-8').split('\n').filter(Boolean);
    
    console.log(chalk.yellow(`\n[!] Initializing ${threads} threads on: ${target}`));
    
    let success = 0;
    setInterval(async () => {
        const proxy = proxies[Math.floor(Math.random() * proxies.length)];
        const agent = new HttpsProxyAgent(`http://${proxy}`);
        
        try {
            const res = await fetch(target, { agent, timeout: 5000 });
            if (res.status === 200 || res.status === 404) {
                success++;
                process.stdout.write(chalk.cyan(`\r[+] Success: ${success} | Status: ${res.status} `));
            }
        } catch (e) {
            // Silence proxy errors to keep terminal clean
        }
    }, 1000 / threads);
}

rl.question(chalk.blue('Enter TikTok Link: '), (link) => {
    rl.question(chalk.blue('Enter Threads (10-100): '), (thr) => {
        startReporting(link, parseInt(thr));
    });
});
