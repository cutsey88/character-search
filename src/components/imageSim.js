let pokemens = {
    Poliwhirl: [
            [1466, 1198],
            [1497, 1187],
            [1511, 1193],
            [1533, 1193],
            [1579, 1202],
            [1594, 1241],
            [1624, 1248],
            [1626, 1259],
            [1621, 1259],
            [1622, 1279],
            [1605, 1289],
            [1587, 1280],
            [1587, 1266],
            [1585, 1251],
            [1574, 1247],
            [1551, 1280],
            [1551, 1295],
            [1545, 1304],
            [1516, 1301],
            [1499, 1280],
            [1499, 1270],
            [1491, 1264],
            [1492, 1235],
            [1462, 1209]
        ],
    Drowzee: [
            [241, 949],
            [290, 952],
            [291, 982],
            [301, 1010],
            [292, 1024],
            [286, 1023],
            [274, 1038],
            [263, 1036],
            [258, 1041],
            [238, 1037],
            [235, 1027],
            [241, 1000],
            [235, 980]
        ],
    Mankey: [
            [640, 370],
            [648, 374],
            [658, 368],
            [670, 368],
            [675, 376],
            [681, 378],
            [673, 407],
            [661, 396],
            [650, 396],
            [642, 391],
            [641, 386]
        ],
}

function ImageSim() {

    return (
        <div style={{width: "1831px", height: "1831px"}} onClick={() => {console.log('hit')}}>
            <map name="image-sim">
                <area shape="poly" coords={pokemens.Poliwhirl.toString()} alt="Poliwhirl" />
                <area shape="poly" coords={pokemens.Drowzee.toString()} alt="Drowzee" />
                <area shape="poly" coords={pokemens.Mankey.toString()} alt="Mankey" />
            </map>
            <img useMap="image-sim" alt="pokemon" style={{width: "1831px", height: "1831px"}} src="" />
        </div>
    )
}

export default ImageSim;