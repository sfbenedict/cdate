exports.setup = function(app) {
	var MongoUtil = require('./MongoUtil');

	MongoUtil.init();

	var ModelTypes = require('./ModelTypes');

	app.post('/authenticate',function(req, res, next){

        MongoUtil.modelQuery(ModelTypes.USER, {}, "", function(docs) {
			res.json(docs);
			return next();
		});



		User.findOne({
			name: req.body.name
		}, function(err, user) {

			if (err) throw err;

			if (!user) {
				res.json({ success: false, message: 'Authentication failed. User not found.' });
			} else if (user) {

				// check if password matches
				if (user.password != req.body.password) {
					res.json({ success: false, message: 'Authentication failed. Wrong password.' });
				} else {

					// if user is found and password is right
					// create a token
					var token = jwt.sign(user, app.get('superSecret'), {
						expiresIn: 86400 // expires in 24 hours
					});

					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}		

			}

		});
	})

	app.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
		var token = req.body.token || req.param('token') || req.headers['x-access-token'];

		// decode token
		if (token) {

			// verifies secret and checks exp
			jwt.verify(token, app.get('superSecret'), function(err, decoded) {			
				if (err) {
					return res.json({ success: false, message: 'Failed to authenticate token.' });		
				} else {
					// if everything is good, save to request for use in other routes
					req.decoded = decoded;	
					next();
				}
			});

		} else {

			// if there is no token
			// return an error
			return res.status(403).send({ 
				success: false, 
				message: 'No token provided.'
			});
			
		}
		
	});

    //remove
	app.get('/items', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.ITEM, {}, "", function(docs) {
			res.json(docs);
			return next();
		});
	});

	// account create
	app.post('/account', function(req, res, next) {
		MongoUtil.modelCreate(ModelTypes.ACCOUNT, {}, "", function(account) {
			res.json(account);
			return next();
		});
	});

	// account update
	app.put('/account', function(req, res, next) {
		MongoUtil.modelUpdate(ModelTypes.ACCOUNT, {}, "", function(account) {
			res.json(account);
			return next();
		});
	});

	// account get
	app.get('/account', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.ACCOUNT, {}, "", function(account) {
			res.json(account);
			return next();
		});
	});



	// profile create
	app.post('/profile', function(req, res, next) {
		MongoUtil.modelCreate(ModelTypes.PROFILE, {}, "", function(profile) {
			res.json(profile);
			return next();
		});
	});

	// profile update
	app.put('/profile', function(req, res, next) {
		MongoUtil.modelUpdate(ModelTypes.PROFILE, {}, "", function(profile) {
			res.json(profile);
			return next();
		});
	});

	// profile get
	app.get('/profile', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.PROFILE, {}, "", function(profile) {
			res.json(profile);
			return next();
		});
	});

	// search profiles get
	// add paging
	app.get('/profiles', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.PROFILE, {}, "", function(profiles) {
			res.json(profiles);
			return next();
		});
	});




	// block create
	app.post('/block', function(req, res, next) {
		MongoUtil.modelCreate(ModelTypes.BLOCK, {}, "", function(block) {
			res.json(block);
			return next();
		});
	});

	// block update
	app.put('/block', function(req, res, next) {
		MongoUtil.modelUpdate(ModelTypes.BLOCK, {}, "", function(block) {
			res.json(block);
			return next();
		});
	});

	// block get
	app.get('/block', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.BLOCK, {}, "", function(block) {
			res.json(block);
			return next();
		});
	});


	// message create
	app.post('/message', function(req, res, next) {
		MongoUtil.modelCreate(ModelTypes.MESSAGE, {}, "", function(message) {
			res.json(block);
			return next();
		});
	});

	// message update
	app.put('/message', function(req, res, next) {
		MongoUtil.modelUpdate(ModelTypes.MESSAGE, {}, "", function(message) {
			res.json(message);
			return next();
		});
	});

	// message get
	app.get('/message', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.MESSAGE, {}, "", function(messages) {
			res.json(messages);
			return next();
		});
	});

	// messages get
	// add paging
	app.get('/messages', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.MESSAGE, {}, "", function(messages) {
			res.json(messages);
			return next();
		});
	});


	// mydate create
	app.post('/mydate', function(req, res, next) {
		MongoUtil.modelCreate(ModelTypes.MYDATE, {}, "", function(mydate) {
			res.json(mydate);
			return next();
		});
	});

	// mydate update
	app.put('/mydate', function(req, res, next) {
		MongoUtil.modelUpdate(ModelTypes.MYDATE, {}, "", function(mydate) {
			res.json(mydate);
			return next();
		});
	});

	// mydate get
	app.get('/mydate', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.MYDATE, {}, "", function(mydate) {
			res.json(mydate);
			return next();
		});
	});

	// mydates get
	app.get('/mydates', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.MYDATE, {}, "", function(mydates) {
			res.json(mydates);
			return next();
		});
	});


	// payment create
	app.post('/payment', function(req, res, next) {
		MongoUtil.modelCreate(ModelTypes.PAYMENT, {}, "", function(payment) {
			res.json(payment);
			return next();
		});
	});

	// payment update
	app.put('/payment', function(req, res, next) {
		MongoUtil.modelUpdate(ModelTypes.PAYMENT, {}, "", function(payment) {
			res.json(payment);
			return next();
		});
	});

	// payment get
	app.get('/payment', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.PAYMENT, {}, "", function(payment) {
			res.json(payment);
			return next();
		});
	});

	// payments get
	app.get('/payments', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.PAYMENT, {}, "", function(payments) {
			res.json(payments);
			return next();
		});
	});

	
	// payout create
	app.post('/payout', function(req, res, next) {
		MongoUtil.modelCreate(ModelTypes.PAYOUT, {}, "", function(payout) {
			res.json(payout);
			return next();
		});
	});

	// payout update
	app.put('/payout', function(req, res, next) {
		MongoUtil.modelUpdate(ModelTypes.PAYOUT, {}, "", function(payout) {
			res.json(payout);
			return next();
		});
	});

	// payout get
	app.get('/payout', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.PAYOUT, {}, "", function(payout) {
			res.json(payout);
			return next();
		});
	});

	// payouts get
	app.get('/payouts', function(req, res, next) {
		MongoUtil.modelQuery(ModelTypes.PAYOUT, {}, "", function(payouts) {
			res.json(payouts);
			return next();
		});
	});






}
