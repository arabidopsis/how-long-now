build:
	@pnpm run production

push: build
	@rsync -av public viridis:/var/www/websites/how-long-now

.PHONY: build push