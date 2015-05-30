# Description
A simple ASCII loader component : `\|/—`

# Examples

The component exposes 2 properties: `speed` in ms and `characters` as a string.

```javascript
// default loader
<Loader />
// fast loader with default characters set
<Loader speed={20} />
// simulate a blink
<Loader characters=". " />
// why not
<Loader characters="abcdefghijklmnopqrstuvwxyz" speed={100} />
```

# Webpack and Babel

If you are using webpack in your project and want to import `react-ascii-loader`, don't forget to update your `webpack.config.js` to include it for `babel-loader` to compile it, because it's using actively the ES6 features.

Something like :

```javascript
	module: {
		loaders: [
			{
				test: /\.js$/,	
				loaders: [ 'babel-loader?stage=0' ],
				include: [
					path.join(__dirname, 'src'),
					path.join(__dirname, 'node_modules', 'react-ascii-loader')
				]
			},
```

# Reference
Inspired from https://gist.github.com/nkbt/6549487