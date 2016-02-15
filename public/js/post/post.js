'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId/:authorId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			post: function($stateParams, Post){
				return Post.find($stateParams.postId);
			},
			user: function($stateParams, User){
				return User.find($stateParams.authorId);
			}
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, post) {

	$scope.post = post;

	/*
		2. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})