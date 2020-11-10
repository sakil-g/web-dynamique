var swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var lat = -21.147390;
            var lon = 55.540141;
            var macarte = null;
            var villes = {
	"Saint-Denis": { "lat": -20.890447, "lon": 55.454915 },
	"Sainte-Marie": { "lat": -20.899306, "lon": 55.526923 },
	"Saint-Pierre": { "lat": -21.332957, "lon": 55.471929 },
	"Saint André": { "lat": -20.963567, "lon": 55.647180 },
    "Saint-Gilles": { "lat": -21.051999, "lon": 55.226304 },
    "Saint-Paul": { "lat": -21.013726, "lon": 55.269355 }
};
            // Fonction d'initialisation de la carte
            function initMap() {
               
                // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
                macarte = L.map('map').setView([lat, lon], 9);
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    // Il est toujours bien de laisser le lien vers la source des données
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 16
                }).addTo(macarte);
                 //création du marqueur
                 for (ville in villes) {
		var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
	        // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
	            marker.bindPopup(ville);
               
            }  
            
              
           
            }
            window.onload = function(){
		// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
		initMap(); 
            };