build:
	@pnpm run production

push: build
	#@rsync -av public viridis:/var/www/websites/how-long-now
	@rsync -av public viridis2:/var/data/www/websites/how-long-now

nginx:
	scp etc/howlongnow.conf viridis2:
	ssh  viridis2 sudo -S mv howlongnow.conf /etc/nginx/sites-enabled/
	ssh  viridis2 sudo -S systemctl restart nginx

.PHONY: build push nginx
