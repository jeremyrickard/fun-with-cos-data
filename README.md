This project has a couple examples of using the `soda-js` library to access the Providers dataset provided by Colorado Springs. 

To run it, first ensure you have npm and nodejs installed. 


Next, use npm to install the dependencies:

```console
$ npm install
```

Now you can build the code with: 

```console
$ npm run compile
```

Finally you can run the generated JS with:

```console
$ node build/src/consumer.js
```

The src/consumer.ts file has three examples:

* Get all the data for the providers dataset
* Get only a certain type of provider
* Get the providers within a circle that is centered at city hall

You can play around with changing the radius of the circle in the third example or changing the where clause on the second example. Once you modify a file, just run `npm run compile` again and then you can run the node command again.


