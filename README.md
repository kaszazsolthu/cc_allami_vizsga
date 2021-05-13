Reactos Codecool állami vizsgafeladat

A feladat pont úgy működik, mint ahogy a példa-videóban láthattuk.
Amennyiben nem csak a játékosokat, hanem a teljes csapatot ki akarnánk szűrni,
az App.js 40-41 sorát kellene erre cserélni:

                teams && teams
                .filter(team => team.franchisePlayers.filter(player => player.name.includes(input)).length)
                .map((team, i) =>
                    <Team key={ i } team={ team } voted={ voted } vote={ vote } input={ input } />)
                    
Így természetesen az inputot sem kellene átadni propsba, de ha kivettem volna,
akkor a components/Team.js-t is módosítani kellene.

Egyéb hiányosság: az App.js 38-as sorában illett volna egy placeholder-t adni az
inputnak.
