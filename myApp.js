/**********************************************
* 3. FCC Mongo & Mongoose Challenges
* ==================================
***********************************************/
/** # MONGOOSE SETUP #
/** 1) Install & Set up mongoose */
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:.dlfkjsdflkweetr3@cluster0.4urka.mongodb.net/mongonpm?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }); 

/** # SCHEMAS and MODELS #
/** 2) Create a 'Person' Model */
// <Your code here >
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

var Person = mongoose.model('Person', personSchema);

/** # [C]RUD part I - CREATE #
/** 3) Create and Save a Person */
var createAndSavePerson = (done) => {
  const person = new Person({
		name: "Max",
		age: 30,
		favoriteFoods: ["Beer"]
  });
  
  person.save((err, data) => {
	if(err){
		done(err);
	}	
	done(null, data);
	})
  };

/** 4) Create many People with `Model.create()` */
var createManyPeople = (arrayOfPeople, done) => {
    
    Person.create(arrayOfPeople, (err, people)=>{
      if(err){
        done(err);
      }	
      done(null, people);
    })
};

/** # C[R]UD part II - READ #
/** 5) Use `Model.find()` */
var findPeopleByName = function(personName, done) {
  Person.find({name: personName}, (error, peopleFound)=>{
    if(error){
      done(error);
    }	
    done(null, peopleFound);
  })

};

/** 6) Use `Model.findOne()` */
var findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods: food}, (error, Person)=>{
    if(error){
      done(error);
    }	
    done(null, Person);
  })
  
};

/** 7) Use `Model.findById()` */

var findPersonById = (personId, done) => {
  
 let personToEdit = Person.findById(personId, (err, Person)=>{
    if(err){
      done(err);
    }	
    done(null, Person);
  })  
};

/** # CR[U]D part III - UPDATE # 
/** 8) Classic Update : Find, Edit then Save */

var findEditThenSave = (personId, done) => {
  var foodToAdd = 'hamburger';
  Person.findById(personId, (err, person)=>{
    if(err){ done(err); }
    person.favoriteFoods.push(foodToAdd)
    person.save((err, data) => {
      if(err){
        done(err);
      }	
      done(null, data);
      })
  });
};
/** 9) New Update : Use `findOneAndUpdate()` */

var findAndUpdate = function(personName, done) {
  Person.findOneAndUpdate({name: personName}, {age: 20}, { new: true }, (err, person)=>{
      if(err){
        done(err);
      }	
      done(null, person);
  })
};

/** # CRU[D] part IV - DELETE #
/** 10) Delete one Person */
var removeById = function(personId, done) {
  Person.findByIdAndRemove(personId, (err, person)=>{
    if(err){
      done(err);
    }	
    done(null, person);
  })
};

/** 11) Delete many People */

var removeManyPeople = function(done) {
  Person.remove( {name: "Mary"}, (err, person)=>{
    if(err){
      done(err);
    }	
    done(null, person);
  })
};

/** # C[R]UD part V -  More about Queries # 
/** 12) Chain Query helpers */
var queryChain = function(done) {
  var foodToSearch = "burrito";
  
  done(null/*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

/** # Further Readings... #
/*  ======================= */
// If you are eager to learn and want to go deeper, You may look at :
// * Indexes ( very important for query efficiency ),
// * Pre/Post hooks,
// * Validation,
// * Schema Virtuals and  Model, Static, and Instance methods,
// * and much more in the [mongoose docs](http://mongoosejs.com/docs/)


//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
