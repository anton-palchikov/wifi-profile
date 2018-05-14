DG.then(function () {
    DG.then(function () {
        var map,
            marker;

        map = DG.map('map', {
            center: [54.981, 82.891],
            zoom: 15
        });

        marker = DG.marker([54.981, 82.891], {
            draggable: true
        }).addTo(map);

        marker.on('drag', function (e) {
            var lat = e.target._latlng.lat.toFixed(3),
                lng = e.target._latlng.lng.toFixed(3);

            locationInfo.innerHTML = lat + ', ' + lng;
        });
    });
});