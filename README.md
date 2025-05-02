

# Install

Install `nodejs`, `pnpm` etc.

```bash
# nvm https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# pnpm
wget -qO- https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
nvm use --lts # use latest long term version of npm, node
git clone --depth=1 https://github.com/arabidopsis/how-long-now.git
cd how-long-now
# install packages
pnpm install
# build public/assets/main.{js,css}
pnpm run production
```

## `nginx`

edit `root /var/www/how-long-now/public;` of `etc/howlongnow.conf`.
Also change `server_name howlongnow.plantenergy.org;`
if you like.


```bash
sudo cp etc/howlongnow.conf /etc/nginx/sites-enabled/
# OR for ubuntu
sudo cp etc/howlongnow.conf /etc/nginx/conf.d/
sudo systemctl restart nginx
```

