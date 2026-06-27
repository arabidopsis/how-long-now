build:
	@pnpm run production

push: build
	#@rsync -av public viridis:/var/www/websites/how-long-now
	@rsync -av public viridis2:/var/data/www/websites/how-long-now

.PHONY: build push
