Sequence of accounts
Akshay Bhat
Akshay(college account)
Killua

* Trial 33
	* Seq len:512
	* batch:8
	* using nothing but 768 dense with 0.2 max norm
	* using dropout of 0.5 for every layer
	* using last 4 layers
	* using constant learning rate 10%
	* Results
		* Val_loss is higher so overfitting
		* after 3rd epoch still loss decreasing
* Trial 34
	* Using only last layer
	* splitted 768 dense to two 128 dense with 0.5 dropout between and 3 max norm 
	* training only on last hidden layer
		* Results
			* Unknown fit yayyy
			* train accuracy>val accruacy
			* so might be dropout problem
* Trial 35
	* batch from 8->16
	* Results
		* Still underfits yayyyy
* Trial 36
	* 16->8 batch
	* Remove one dense and dropout layer
		* Result 
			* I call this litttttle overfitting no?
			* ![[trail-36.png]] 
* Trial 37
	* back to 16 batch
	* changed to 0.1 for all layers between bert layers
	* tooooo much overfitting ;(
* Trial 38
	* Back to 0.5 :( drops
	* Back to 8 batch(didn't make any difference so...)
	* added that dense layer back
	* seems to underfit
		* Results
			* Yayyy underfitting
* Trial 38
	* removed one dense layer
	* added global average pooling
		* Result 
			* Overfits
* Trial 39
	* added globalmax pool Back
	* Someting happend
		* result
			* ![[trial-39.png]]
* Trial 40
	* Using globalavg pool
	*  0.1 for dropout inside transformer
	* ooooverfitting
* Trial 41
	* Using 0.5 dropout only
	* overfitting
* Trial 42
	* activation ->dropout->max norm 
	* not meeting
	* result
		* ![[trial 42.png]]
* Trial 43
	* started using globalmax pool
	* drop(64)->dense(0.3)->activation tanh->drop(64)->dense(2)
	* Results
		* ![[trial43.png]]
* Trial 44
	* added leaky relu and l2 regularize for dense layer
* Trial 45
	* Using 256 seq len
	* using  max norm with one layer and one dropout layer
	* 0.5 dropout for every layer
	* batch stays 8
* Trial 46
	* Very light cleaning with no augmentatino
	* 256 seq len and batch size 8
	* flatten->dense(128)with maxnorm 3 and dropouut 0.5
	* lr=2e-5
	* 