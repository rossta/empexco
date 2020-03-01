# Empire City Conf

Conference website. Work-in-progress.

![prelaunch](doc/prelaunch-screenshot.png)

### Contributing

To get started:

``` sh
git clone https://github.com/empexconf/empexco.git
cd website
bundle
bin/middleman
```

Then visit [http://localhost:4567/](http://localhost:4567/)

### Deploying

The website is hosted on GitHub pages. To deploy:

```sh
bin/rake deploy
```

The deploy task will build the middleman project and push the latest source
files to the `gh-pages` branch of this repository.

### Requirements

If the `bundle` command fails to run, you may need to upgrade your Ruby version. The website build requires 1.9.3 or newer (2.3.0 recommended). You can use [RVM](https://rvm.io/) to install it:

``` sh
curl -L https://get.rvm.io | bash -s stable
rvm install 2.3.0
rvm use 2.3.0
```

### Adding Talks

After a conference, once the YouTube links are up, you'll want to add the talks to the site.
To do so, just add the talks as YAML files in `./talks/<city>/<year>/<talk-name>.yml`.
There is a blank template at [./blank-talk.yml](./blank-talk.yml) to make it easier to create these files.

Once you've added a file, it should show up on the homepage and as a page in the site.
