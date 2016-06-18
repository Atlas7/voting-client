# Background

Please use this comprehensive [Full-Stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) as a central reference doc. This Voting Client complements well with the [Voting Server](https://github.com/Atlas7/voting-server).

# Instruction

Git clone this repository.

Start the webpack web client:

```
webpack-dev-server
```

The Web app is accessible at [http://localhost:8080](http://localhost:8080) via any browser.

Routes:

- To vote / progress to next round: [http://localhost:8080](http://localhost:8080)
- To view result: [http://localhost:8080/#/results](http://localhost:8080/#/results)

Notes:

- The web app "talks / listen to" the Voting Server via real-time websocket communication.
