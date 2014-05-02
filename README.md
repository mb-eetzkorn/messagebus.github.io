# API Documentation
It's advisable to do a local install of Jekyll, etc. so you can see what you're doing. All instructions assume you're
running MacOS and don't mind a little extra work to avoid problems down the line. If this doesn't get you running then
go to the [Jekyll troubleshooting page](http://jekyllrb.com/docs/troubleshooting/).

```
export CFLAGS=-Qunused-arguments
export CPPFLAGS=-Qunused-arguments
export ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future

sudo -E gem update --system
sudo -E gem install bundler
sudo -E bundle install
sudo gem install jekyll
```

Once everything is installed, run the following command from the repo root.

```
jekyll serve --watch
```