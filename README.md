

# Install

Install `nodejs`, `pnpm` etc.

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
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
sudo systemctl restart nginx
```

(or copy into `/etc/nginx/conf.d/` for RHEL)