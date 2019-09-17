function orden() {
    let ciudades = ['Sevilla','Cadiz','Huelva','Malaga','Granada','Almeria','Jaen','Cordoba']
    ciudades.sort();
    document.write('<table border="1px">');
    for (let ciudad of ciudades) {
        document.write('<tr>' + '<td>' + ciudad + '</td>' + '</tr>');
    }
    document.write('</table>')
}