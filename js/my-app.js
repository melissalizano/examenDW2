// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/artist/',
    	url: 'artist.html',
    	name: 'artist',
  		},
		{
		path: '/playlist/',
    	url: 'playlist.html',
    	name: 'playlist',
  		},
		{
		path: '/menu/',
    	url: 'menu.html',
    	name: 'menu',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/form/',
    	url: 'form.html',
    	name: 'form',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

