const data = require("./groups.json");

//U plasmanGrupe cuvam sve podatke vezano za statistiku
var plasmanGrupe = {"A":[{"Team": "Kanada", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:0, AUS:0, GRE:0, SPA:0,AUSk:0, GREk:0, SPAk:0},
{"Team": "Australija", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:0, CAN:0, GRE:0, SPA:0, CANk:0, GREk:0, SPAk:0},
{"Team": "Grčka", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:0, CAN:0, AUS:0, SPA:0, CANk:0, AUSk:0, SPAk:0},
{"Team": "Španija", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:2, CAN:0, AUS:0, GRE:0, CANk:0, AUSk:0, GREk:0}],
"B":[{"Team": "Nemačka", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:0, FRA:0, BRA:0, JAP:0, FRAk:0, BRAk:0, JAPk:0},
{"Team": "Francuska", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:-2, GER:0, BRA:0, JAP:0, GERk:0, BRAk:0, JAPk:0},
{"Team": "Brazil", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:-2, GER:0, FRA:0, JAP:0, GERk:0, FRAk:0, JAPk:0},
{"Team": "Japan", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:-2, GER:0, FRA:0, BRA:0, GERk:0, FRAk:0, BRAk:0}],
"C":[{"Team": "Sjedinjene Države", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:2, SRB:0, SSUD:0, PUER:0, SRBk:0, SSUDk:0, PUERk:0},
{"Team": "Srbija", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:2, USA:0, SSUD:0, PUER:0, USAk:0, SSUDk:0, PUERk:0},
{"Team": "Južni Sudan", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:-2, USA:0, SRB:0, PUER:0, USAk:0, SRBk:0, PUERk:0},
{"Team": "Puerto Riko", Pobede: 0, Porazi: 0, Bodovi: 0, PostKosevi: 0, PrimljKos: 0, Razl: 0, Forma:-2, USA:0, SRB:0, SSUD:0, USAk:0, SRBk:0, SSUDk:0}]};

//Ova funkcija ima ulazni argument broj kola, ona izracunava rezultat dve utakmice iz iste grupe i popunjava podatke za statistiku vezano za te dve utakmice
function IgraA(kolo)
{
let x = Math.floor(Math.random() * 50) + 60;
let y = Math.floor(Math.random() * 50) + 60;

//ukoliko je kolo 1 imam i FIBARanking dodat i plus Formu
//i,j,k,l sluzi da selektujem kom objektu pristupam, posto za razlicita kola moram razlicite timove da ucitavam u f-ju u zavisnosti od kola
if(kolo == 1)
    {
        var i=0;
        var j=2;
        var k=1;
        var l=3;
        var zemlja1 = (plasmanGrupe.A[i].Forma)*2 + x - data.A[i].FIBARanking;
        var zemlja2 = (plasmanGrupe.A[j].Forma)*2 + x - data.A[j].FIBARanking;
        var zemlja3 = (plasmanGrupe.A[k].Forma)*2 + y - data.A[k].FIBARanking;
        var zemlja4 = (plasmanGrupe.A[l].Forma)*2 + y - data.A[l].FIBARanking;

    }
//Ovde nemam FibaRanking, vec samo Formu
else if(kolo == 2)
{
    var i=0;
    var j=3;
    var k=1;
    var l=2;
    var zemlja1 = (plasmanGrupe.A[i].Forma)*2 + x;
    var zemlja2 = (plasmanGrupe.A[j].Forma)*2 + x;
    var zemlja3 = (plasmanGrupe.A[k].Forma)*2 + y;
    var zemlja4 = (plasmanGrupe.A[l].Forma)*2 + y;
    
}
else if(kolo == 3)
{
    var i=0;
    var j=1;
    var k=3;
    var l=2;
    var zemlja1 = (plasmanGrupe.A[i].Forma)*2 + x;
    var zemlja2 = (plasmanGrupe.A[j].Forma)*2 + x;
    var zemlja3 = (plasmanGrupe.A[k].Forma)*2 + y;
    var zemlja4 = (plasmanGrupe.A[l].Forma)*2 + y;

}
  if(zemlja1>zemlja2)
    {
        //Ukoliko je prva zemlja(drzava) pobedila, dodajem sve podatke za statistiku
        plasmanGrupe.A[i].Forma++;
        plasmanGrupe.A[j].Forma--;
        plasmanGrupe.A[j].Bodovi++;
        plasmanGrupe.A[i].Bodovi += 2;
        plasmanGrupe.A[i].Pobede++;
        plasmanGrupe.A[j].Porazi--;
        plasmanGrupe.A[i].PostKosevi += zemlja1;
        plasmanGrupe.A[i].PrimljKos +=zemlja2;
        plasmanGrupe.A[j].PostKosevi += zemlja2;
        plasmanGrupe.A[j].PrimljKos += zemlja1;
        if(kolo == 1)
        {
            //Ovde dodajem koju drzavu je pobedila i sa kojom kos razlikom
            plasmanGrupe.A[0].GRE++;
            plasmanGrupe.A[2].CAN--;
            plasmanGrupe.A[0].GREk = zemlja1 - zemlja2;
            plasmanGrupe.A[2].CANk = zemlja2 - zemlja1;
        }
        else if(kolo == 2)
        {
            plasmanGrupe.A[0].SPA++;
            plasmanGrupe.A[3].CAN--;
            plasmanGrupe.A[0].SPAk = zemlja1 - zemlja2;
            plasmanGrupe.A[3].CANk = zemlja2 - zemlja1;
        }
        else if(kolo == 3){
            plasmanGrupe.A[0].AUS++;
            plasmanGrupe.A[1].CAN--;
            plasmanGrupe.A[0].AUSk = zemlja1 - zemlja2;
            plasmanGrupe.A[1].CANk = zemlja2 - zemlja1;
        }
    }
else if(zemlja1<zemlja2)
    {
        plasmanGrupe.A[i].Forma--;
        plasmanGrupe.A[j].Forma++;
        plasmanGrupe.A[j].Bodovi += 2;
        plasmanGrupe.A[i].Bodovi++;
        plasmanGrupe.A[j].Pobede++;
        plasmanGrupe.A[i].Porazi--;
        plasmanGrupe.A[j].PostKosevi += zemlja2;
        plasmanGrupe.A[j].PrimljKos +=zemlja1;
        plasmanGrupe.A[i].PostKosevi += zemlja1;
        plasmanGrupe.A[i].PrimljKos += zemlja2;

        if(kolo == 1)
            {
                plasmanGrupe.A[0].GRE--;
                plasmanGrupe.A[2].CAN++;
                plasmanGrupe.A[0].GREk = zemlja1 - zemlja2;
                plasmanGrupe.A[2].CANk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.A[0].SPA--;
                plasmanGrupe.A[3].CAN++;
                plasmanGrupe.A[0].SPAk = zemlja1 - zemlja2;
                plasmanGrupe.A[3].CANk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.A[0].AUS--;
                plasmanGrupe.A[1].CAN++;
                plasmanGrupe.A[0].AUSk = zemlja1 - zemlja2;
                plasmanGrupe.A[1].CANk = zemlja2 - zemlja1;
            }

    }
else{
    //Ukoliko je nereseno
    Math.random() > 0.5 ? zemlja1 : zemlja2
    if(zemlja1 > zemlja2)
    {
        zemlja1 += Math.floor(Math.random() * 10) + 1;
        plasmanGrupe.A[i].Forma++;
        plasmanGrupe.A[j].Forma--;
        plasmanGrupe.A[j].Bodovi++;
        plasmanGrupe.A[i].Bodovi += 2;
        plasmanGrupe.A[i].Pobede++;
        plasmanGrupe.A[j].Porazi--;
        plasmanGrupe.A[i].PostKosevi += zemlja1;
        plasmanGrupe.A[i].PrimljKos +=zemlja2;
        plasmanGrupe.A[j].PostKosevi += zemlja2;
        plasmanGrupe.A[j].PrimljKos += zemlja1;
        if(kolo == 1)
            {
                plasmanGrupe.A[0].GRE++;
                plasmanGrupe.A[2].CAN--;
                plasmanGrupe.A[0].GREk = zemlja1 - zemlja2;
                plasmanGrupe.A[2].CANk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.A[0].SPA++;
                plasmanGrupe.A[3].CAN--;
                plasmanGrupe.A[0].SPAk = zemlja1 - zemlja2;
                plasmanGrupe.A[3].CANk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.A[0].AUS++;
                plasmanGrupe.A[1].CAN--;
                plasmanGrupe.A[0].AUSk = zemlja1 - zemlja2;
                plasmanGrupe.A[1].CANk = zemlja2 - zemlja1;
            }
    }
    else{
        zemlja2 += Math.floor(Math.random() * 10) + 1;
        plasmanGrupe.A[i].Forma--;
        plasmanGrupe.A[j].Forma++;
        plasmanGrupe.A[j].Bodovi += 2;
        plasmanGrupe.A[i].Bodovi++;
        plasmanGrupe.A[j].Pobede++;
        plasmanGrupe.A[i].Porazi--;
        plasmanGrupe.A[j].PostKosevi += zemlja2;
        plasmanGrupe.A[j].PrimljKos +=zemlja1;
        plasmanGrupe.A[i].PostKosevi += zemlja1;
        plasmanGrupe.A[i].PrimljKos += zemlja2;

        if(kolo == 1)
            {
                plasmanGrupe.A[0].GRE--;
                plasmanGrupe.A[2].CAN++;
                plasmanGrupe.A[0].GREk = zemlja1 - zemlja2;
                plasmanGrupe.A[2].CANk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.A[0].SPA--;
                plasmanGrupe.A[3].CAN++;
                plasmanGrupe.A[0].SPAk = zemlja1 - zemlja2;
                plasmanGrupe.A[3].CANk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.A[0].AUS--;
                plasmanGrupe.A[1].CAN++;
                plasmanGrupe.A[0].AUSk = zemlja1 - zemlja2;
                plasmanGrupe.A[1].CANk = zemlja2 - zemlja1;
            }
    }
}
//Ovo je drugi par iz iste grupe
 if(zemlja3>zemlja4)
    {
       plasmanGrupe.A[k].Forma++;
       plasmanGrupe.A[l].Forma--;
       plasmanGrupe.A[l].Bodovi++;
       plasmanGrupe.A[k].Bodovi += 2;
       plasmanGrupe.A[k].Pobede++;
       plasmanGrupe.A[l].Porazi--;
       plasmanGrupe.A[k].PostKosevi += zemlja3;
       plasmanGrupe.A[k].PrimljKos +=zemlja4;
       plasmanGrupe.A[l].PostKosevi += zemlja4;
       plasmanGrupe.A[l].PrimljKos += zemlja3;
       if(kolo == 1)
        {
            plasmanGrupe.A[1].SPA++;
            plasmanGrupe.A[3].AUS--;
            plasmanGrupe.A[1].SPAk = zemlja3 - zemlja4;
            plasmanGrupe.A[3].AUSk = zemlja4 - zemlja3;
        }
        else if(kolo == 2)
        {
            plasmanGrupe.A[1].GRE++;
            plasmanGrupe.A[2].AUS--;
            plasmanGrupe.A[1].GREk = zemlja3 - zemlja4;
            plasmanGrupe.A[2].AUSk = zemlja4 - zemlja3;
        }
        else if(kolo == 3){
            plasmanGrupe.A[3].GRE++;
            plasmanGrupe.A[2].SPA--;
            plasmanGrupe.A[3].GREk = zemlja3 - zemlja4;
            plasmanGrupe.A[2].SPAk = zemlja4 - zemlja3;
        }
    }
   else if(zemlja3 < zemlja4)
    {
       plasmanGrupe.A[k].Forma--;
       plasmanGrupe.A[l].Forma++;
       plasmanGrupe.A[l].Bodovi += 2;
       plasmanGrupe.A[k].Bodovi++;
       plasmanGrupe.A[l].Pobede++;
       plasmanGrupe.A[k].Porazi--;
       plasmanGrupe.A[l].PostKosevi += zemlja4;
       plasmanGrupe.A[l].PrimljKos +=zemlja3;
       plasmanGrupe.A[k].PostKosevi += zemlja3;
       plasmanGrupe.A[k].PrimljKos += zemlja4;

       if(kolo == 1)
        {
            plasmanGrupe.A[1].SPA--;
            plasmanGrupe.A[3].AUS++;
            plasmanGrupe.A[1].SPAk = zemlja3 - zemlja4;
            plasmanGrupe.A[3].AUSk = zemlja4 - zemlja3;
        }
        else if(kolo == 2)
        {
            plasmanGrupe.A[1].GRE--;
            plasmanGrupe.A[2].AUS++;
            plasmanGrupe.A[1].GREk = zemlja3 - zemlja4;
            plasmanGrupe.A[2].AUSk = zemlja4 - zemlja3;
        }
        else if(kolo == 3){
            plasmanGrupe.A[3].GRE--;
            plasmanGrupe.A[2].SPA++;
            plasmanGrupe.A[3].GREk = zemlja3 - zemlja4;
            plasmanGrupe.A[2].SPAk = zemlja4 - zemlja3;
        }
    }
    else
    {
        Math.random() > 0.5 ? zemlja1 : zemlja2
        if (zemlja3 > zemlja4)
        {
            zemlja3 += Math.floor(Math.random() * 10) + 1;
            plasmanGrupe.A[k].Forma++;
            plasmanGrupe.A[l].Forma--;
            plasmanGrupe.A[l].Bodovi++;
            plasmanGrupe.A[k].Bodovi += 2;
            plasmanGrupe.A[k].Pobede++;
            plasmanGrupe.A[l].Porazi--;
            plasmanGrupe.A[k].PostKosevi += zemlja3;
            plasmanGrupe.A[k].PrimljKos +=zemlja4;
            plasmanGrupe.A[l].PostKosevi += zemlja4;
            plasmanGrupe.A[l].PrimljKos += zemlja3;
            if(kolo == 1)
                {
                    plasmanGrupe.A[1].SPA++;
                    plasmanGrupe.A[3].AUS--;
                    plasmanGrupe.A[1].SPAk = zemlja3 - zemlja4;
                    plasmanGrupe.A[3].AUSk = zemlja4 - zemlja3;
                }
                else if(kolo == 2)
                {
                    plasmanGrupe.A[1].GRE++;
                    plasmanGrupe.A[2].AUS--;
                    plasmanGrupe.A[1].GREk = zemlja3 - zemlja4;
                    plasmanGrupe.A[2].AUSk = zemlja4 - zemlja3;
                }
                else if(kolo == 3){
                    plasmanGrupe.A[3].GRE++;
                    plasmanGrupe.A[2].SPA--;
                    plasmanGrupe.A[3].GREk = zemlja3 - zemlja4;
                    plasmanGrupe.A[2].SPAk = zemlja4 - zemlja3;
                }
        }
        else
        {
            zemlja4 += Math.floor(Math.random() * 10) + 1;
            plasmanGrupe.A[k].Forma--;
            plasmanGrupe.A[l].Forma++;
            plasmanGrupe.A[l].Bodovi += 2;
            plasmanGrupe.A[k].Bodovi++;
            plasmanGrupe.A[l].Pobede++;
            plasmanGrupe.A[k].Porazi--;
            plasmanGrupe.A[l].PostKosevi += zemlja4;
            plasmanGrupe.A[l].PrimljKos +=zemlja3;
            plasmanGrupe.A[k].PostKosevi += zemlja3;
            plasmanGrupe.A[k].PrimljKos += zemlja4;
            if(kolo == 1)
                {
                    plasmanGrupe.A[1].SPA--;
                    plasmanGrupe.A[3].AUS++;
                    plasmanGrupe.A[1].SPAk = zemlja3 - zemlja4;
                    plasmanGrupe.A[3].AUSk = zemlja4 - zemlja3;
                }
                else if(kolo == 2)
                {
                    plasmanGrupe.A[1].GRE--;
                    plasmanGrupe.A[2].AUS++;
                    plasmanGrupe.A[1].GREk = zemlja3 - zemlja4;
                    plasmanGrupe.A[2].AUSk = zemlja4 - zemlja3;
                }
                else if(kolo == 3){
                    plasmanGrupe.A[3].GRE--;
                    plasmanGrupe.A[2].SPA++;
                    plasmanGrupe.A[3].GREk = zemlja3 - zemlja4;
                    plasmanGrupe.A[2].SPAk = zemlja4 - zemlja3;
                }
        }
    }

    console.log(data.A[i].Team + ":" + data.A[j].Team+" "+zemlja1+':'+zemlja2)
    console.log(data.A[k].Team + ":" + data.A[l].Team+" "+zemlja3+':'+zemlja4)

}

//Ista kao za A, samo ovde je za B grupu
function IgraB(kolo)
{
let x = Math.floor(Math.random() * 50) + 60;
let y = Math.floor(Math.random() * 50) + 60;

if(kolo == 1)
    {
        var i=0;
        var j=2;
        var k=1;
        var l=3;
        var zemlja1 = (plasmanGrupe.B[i].Forma)*2 + x - data.B[i].FIBARanking;
        var zemlja2 = (plasmanGrupe.B[j].Forma)*2 + x - data.B[j].FIBARanking;
        var zemlja3 = (plasmanGrupe.B[k].Forma)*2 + y - data.B[k].FIBARanking;
        var zemlja4 = (plasmanGrupe.B[l].Forma)*2 + y - data.B[l].FIBARanking;
    }
else if(kolo == 2)
{
    var i=0;
    var j=3;
    var k=1;
    var l=2;
    var zemlja1 = (plasmanGrupe.B[i].Forma)*2 + x;
    var zemlja2 = (plasmanGrupe.B[j].Forma)*2 + x;
    var zemlja3 = (plasmanGrupe.B[k].Forma)*2 + y;
    var zemlja4 = (plasmanGrupe.B[l].Forma)*2 + y;
}
else if(kolo == 3)
{
    var i=0;
    var j=1;
    var k=3;
    var l=2;
    var zemlja1 = (plasmanGrupe.B[i].Forma)*2 + x;
    var zemlja2 = (plasmanGrupe.B[j].Forma)*2 + x;
    var zemlja3 = (plasmanGrupe.B[k].Forma)*2 + y;
    var zemlja4 = (plasmanGrupe.B[l].Forma)*2 + y;
}
  if(zemlja1>zemlja2)
    {
        plasmanGrupe.B[i].Forma++;
        plasmanGrupe.B[j].Forma--;
        plasmanGrupe.B[j].Bodovi++;
        plasmanGrupe.B[i].Bodovi += 2;
        plasmanGrupe.B[i].Pobede++;
        plasmanGrupe.B[j].Porazi--;
        plasmanGrupe.B[i].PostKosevi += zemlja1;
        plasmanGrupe.B[i].PrimljKos +=zemlja2;
        plasmanGrupe.B[j].PostKosevi += zemlja2;
        plasmanGrupe.B[j].PrimljKos += zemlja1;
        if(kolo == 1)
            {
                plasmanGrupe.B[0].BRA++;
                plasmanGrupe.B[2].GER--;
                plasmanGrupe.B[0].BRAk = zemlja1 - zemlja2;
                plasmanGrupe.B[2].GERk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.B[0].JAP++;
                plasmanGrupe.B[3].GER--;
                plasmanGrupe.B[0].JAPk = zemlja1 - zemlja2;
                plasmanGrupe.B[3].GERk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.B[0].FRA++;
                plasmanGrupe.B[1].GER--;
                plasmanGrupe.B[0].FRAk = zemlja1 - zemlja2;
                plasmanGrupe.B[1].GERk = zemlja2 - zemlja1;
            }
    }
else if(zemlja1<zemlja2)
    {
        plasmanGrupe.B[i].Forma--;
        plasmanGrupe.B[j].Forma++;
        plasmanGrupe.B[j].Bodovi += 2;
        plasmanGrupe.B[i].Bodovi++;
        plasmanGrupe.B[j].Pobede++;
        plasmanGrupe.B[i].Porazi--;
        plasmanGrupe.B[j].PostKosevi += zemlja2;
        plasmanGrupe.B[j].PrimljKos +=zemlja1;
        plasmanGrupe.B[i].PostKosevi += zemlja1;
        plasmanGrupe.B[i].PrimljKos += zemlja2;
        if(kolo == 1)
            {
                plasmanGrupe.B[0].BRA--;
                plasmanGrupe.B[2].GER++;
                plasmanGrupe.B[0].BRAk = zemlja1 - zemlja2;
                plasmanGrupe.B[2].GERk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.B[0].JAP--;
                plasmanGrupe.B[3].GER++;
                plasmanGrupe.B[0].JAPk = zemlja1 - zemlja2;
                plasmanGrupe.B[3].GERk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.B[0].FRA--;
                plasmanGrupe.B[1].GER++;
                plasmanGrupe.B[0].FRAk = zemlja1 - zemlja2;
                plasmanGrupe.B[1].GERk = zemlja2 - zemlja1;
            }
    }
else{
    Math.random() > 0.5 ? zemlja1 : zemlja2
    if(zemlja1 > zemlja2)
    {
        zemlja1 += Math.floor(Math.random() * 10) + 1;
        plasmanGrupe.B[i].Forma++;
        plasmanGrupe.B[j].Forma--;
        plasmanGrupe.B[j].Bodovi++;
        plasmanGrupe.B[i].Bodovi += 2;
        plasmanGrupe.B[i].Pobede++;
        plasmanGrupe.B[j].Porazi--;
        plasmanGrupe.B[i].PostKosevi += zemlja1;
        plasmanGrupe.B[i].PrimljKos +=zemlja2;
        plasmanGrupe.B[j].PostKosevi += zemlja2;
        plasmanGrupe.B[j].PrimljKos += zemlja1;
        if(kolo == 1)
            {
                plasmanGrupe.B[0].BRA++;
                plasmanGrupe.B[2].GER--;
                plasmanGrupe.B[0].BRAk = zemlja1 - zemlja2;
                plasmanGrupe.B[2].GERk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.B[0].JAP++;
                plasmanGrupe.B[3].GER--;
                plasmanGrupe.B[0].JAPk = zemlja1 - zemlja2;
                plasmanGrupe.B[3].GERk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.B[0].FRA++;
                plasmanGrupe.B[1].GER--;
                plasmanGrupe.B[0].FRAk = zemlja1 - zemlja2;
                plasmanGrupe.B[1].GERk = zemlja2 - zemlja1;
            }
    }
    else{
        zemlja2 += Math.floor(Math.random() * 10) + 1;
        plasmanGrupe.B[i].Forma--;
        plasmanGrupe.B[j].Forma++;
        plasmanGrupe.B[j].Bodovi += 2;
        plasmanGrupe.B[i].Bodovi++;
        plasmanGrupe.B[j].Pobede++;
        plasmanGrupe.B[i].Porazi--;
        plasmanGrupe.B[j].PostKosevi += zemlja2;
        plasmanGrupe.B[j].PrimljKos +=zemlja1;
        plasmanGrupe.B[i].PostKosevi += zemlja1;
        plasmanGrupe.B[i].PrimljKos += zemlja2;
        if(kolo == 1)
            {
                plasmanGrupe.B[0].BRA--;
                plasmanGrupe.B[2].GER++;
                plasmanGrupe.B[0].BRAk = zemlja1 - zemlja2;
                plasmanGrupe.B[2].GERk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.B[0].JAP--;
                plasmanGrupe.B[3].GER++;
                plasmanGrupe.B[0].JAPk = zemlja1 - zemlja2;
                plasmanGrupe.B[3].GERk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.B[0].FRA--;
                plasmanGrupe.B[1].GER++;
                plasmanGrupe.B[0].FRAk = zemlja1 - zemlja2;
                plasmanGrupe.B[1].GERk = zemlja2 - zemlja1;
            }
    }
}
 if(zemlja3>zemlja4)
    {
       plasmanGrupe.B[k].Forma++;
       plasmanGrupe.B[l].Forma--;
       plasmanGrupe.B[l].Bodovi++;
       plasmanGrupe.B[k].Bodovi += 2;
       plasmanGrupe.B[k].Pobede++;
       plasmanGrupe.B[l].Porazi--;
       plasmanGrupe.B[k].PostKosevi += zemlja3;
       plasmanGrupe.B[k].PrimljKos +=zemlja4;
       plasmanGrupe.B[l].PostKosevi += zemlja4;
       plasmanGrupe.B[l].PrimljKos += zemlja3;
       if(kolo == 1)
        {
            plasmanGrupe.B[1].JAP++;
            plasmanGrupe.B[3].FRA--;
            plasmanGrupe.B[1].JAPk = zemlja3 - zemlja4;
            plasmanGrupe.B[3].FRAk = zemlja4 - zemlja3;
        }
        else if(kolo == 2)
        {
            plasmanGrupe.B[1].BRA++;
            plasmanGrupe.B[2].FRA--;
            plasmanGrupe.B[1].BRAk = zemlja3 - zemlja4;
            plasmanGrupe.B[2].FRAk = zemlja4 - zemlja3;
        }
        else if(kolo == 3){
            plasmanGrupe.B[3].BRA++;
            plasmanGrupe.B[2].JAP--;
            plasmanGrupe.B[3].BRAk = zemlja3 - zemlja4;
            plasmanGrupe.B[2].JAPk = zemlja4 - zemlja3;
        }
    }
   else if(zemlja3 < zemlja4)
    {
       plasmanGrupe.B[k].Forma--;
       plasmanGrupe.B[l].Forma++;
       plasmanGrupe.B[l].Bodovi += 2;
       plasmanGrupe.B[k].Bodovi++;
       plasmanGrupe.B[l].Pobede++;
       plasmanGrupe.B[k].Porazi--;
       plasmanGrupe.B[l].PostKosevi += zemlja4;
       plasmanGrupe.B[l].PrimljKos +=zemlja3;
       plasmanGrupe.B[k].PostKosevi += zemlja3;
       plasmanGrupe.B[k].PrimljKos += zemlja4;
       if(kolo == 1)
        {
            plasmanGrupe.B[1].JAP--;
            plasmanGrupe.B[3].FRA++;
            plasmanGrupe.B[1].JAPk = zemlja3 - zemlja4;
            plasmanGrupe.B[3].FRAk = zemlja4 - zemlja3;
        }
        else if(kolo == 2)
        {
            plasmanGrupe.B[1].BRA--;
            plasmanGrupe.B[2].FRA++;
            plasmanGrupe.B[1].BRAk = zemlja3 - zemlja4;
            plasmanGrupe.B[2].FRAk = zemlja4 - zemlja3;
        }
        else if(kolo == 3){
            plasmanGrupe.B[3].BRA--;
            plasmanGrupe.B[2].JAP++;
            plasmanGrupe.B[3].BRAk = zemlja3 - zemlja4;
            plasmanGrupe.B[2].JAPk = zemlja4 - zemlja3;
        }
    }
    else
    {
        Math.random() > 0.5 ? zemlja1 : zemlja2
        if (zemlja3 > zemlja4)
        {
            zemlja3 += Math.floor(Math.random() * 10) + 1;
            plasmanGrupe.B[k].Forma++;
            plasmanGrupe.B[l].Forma--;
            plasmanGrupe.B[l].Bodovi++;
            plasmanGrupe.B[k].Bodovi += 2;
            plasmanGrupe.B[k].Pobede++;
            plasmanGrupe.B[l].Porazi--;
            plasmanGrupe.B[k].PostKosevi += zemlja3;
            plasmanGrupe.B[k].PrimljKos +=zemlja4;
            plasmanGrupe.B[l].PostKosevi += zemlja4;
            plasmanGrupe.B[l].PrimljKos += zemlja3;
            if(kolo == 1)
                {
                    plasmanGrupe.B[1].JAP++;
                    plasmanGrupe.B[3].FRA--;
                    plasmanGrupe.B[1].JAPk = zemlja3 - zemlja4;
                    plasmanGrupe.B[3].FRAk = zemlja4 - zemlja3;
                }
                else if(kolo == 2)
                {
                    plasmanGrupe.B[1].BRA++;
                    plasmanGrupe.B[2].FRA--;
                    plasmanGrupe.B[1].BRAk = zemlja3 - zemlja4;
                    plasmanGrupe.B[2].FRAk = zemlja4 - zemlja3;
                }
                else if(kolo == 3){
                    plasmanGrupe.B[3].BRA++;
                    plasmanGrupe.B[2].JAP--;
                    plasmanGrupe.B[3].BRAk = zemlja3 - zemlja4;
                    plasmanGrupe.B[2].JAPk = zemlja4 - zemlja3;
                }
        }
        else
        {
            zemlja4 += Math.floor(Math.random() * 10) + 1;
            plasmanGrupe.B[k].Forma--;
            plasmanGrupe.B[l].Forma++;
            plasmanGrupe.B[l].Bodovi += 2;
            plasmanGrupe.B[k].Bodovi++;
            plasmanGrupe.B[l].Pobede++;
            plasmanGrupe.B[k].Porazi--;
            plasmanGrupe.B[l].PostKosevi += zemlja4;
            plasmanGrupe.B[l].PrimljKos +=zemlja3;
            plasmanGrupe.B[k].PostKosevi += zemlja3;
            plasmanGrupe.B[k].PrimljKos += zemlja4;
            if(kolo == 1)
                {
                    plasmanGrupe.B[1].JAP--;
                    plasmanGrupe.B[3].FRA++;
                    plasmanGrupe.B[1].JAPk = zemlja3 - zemlja4;
                    plasmanGrupe.B[3].FRAk = zemlja4 - zemlja3;
                }
                else if(kolo == 2)
                {
                    plasmanGrupe.B[1].BRA--;
                    plasmanGrupe.B[2].FRA++;
                    plasmanGrupe.B[1].BRAk = zemlja3 - zemlja4;
                    plasmanGrupe.B[2].FRAk = zemlja4 - zemlja3;
                }
                else if(kolo == 3){
                    plasmanGrupe.B[3].BRA--;
                    plasmanGrupe.B[2].JAP++;
                    plasmanGrupe.B[3].BRAk = zemlja3 - zemlja4;
                    plasmanGrupe.B[2].JAPk = zemlja4 - zemlja3;
                }
        }
    }
console.log(data.B[i].Team + ":" + data.B[j].Team+" "+zemlja1+':'+zemlja2)
console.log(data.B[k].Team + ":" + data.B[l].Team+" "+zemlja3+':'+zemlja4)

}


//Ista kao za A i B, samo ovde je za C grupu
function IgraC(kolo)
{
let x = Math.floor(Math.random() * 50) + 60;
let y = Math.floor(Math.random() * 50) + 60;

if(kolo == 1)
    {
        var i=0;
        var j=2;
        var k=1;
        var l=3;
        var zemlja1 = (plasmanGrupe.C[i].Forma)*2 + x - data.C[i].FIBARanking;
        var zemlja2 = (plasmanGrupe.C[j].Forma)*2 + x - data.C[j].FIBARanking;
        var zemlja3 = (plasmanGrupe.C[k].Forma)*2 + y - data.C[k].FIBARanking;
        var zemlja4 = (plasmanGrupe.C[l].Forma)*2 + y - data.C[l].FIBARanking;

    }
else if(kolo == 2)
{
    var i=0;
    var j=3;
    var k=1;
    var l=2;
    var zemlja1 = (plasmanGrupe.C[i].Forma)*2 + x;
    var zemlja2 = (plasmanGrupe.C[j].Forma)*2 + x;
    var zemlja3 = (plasmanGrupe.C[k].Forma)*2 + y;
    var zemlja4 = (plasmanGrupe.C[l].Forma)*2 + y;
    
}
else if(kolo == 3)
{
    var i=0;
    var j=1;
    var k=3;
    var l=2;
    var zemlja1 = (plasmanGrupe.C[i].Forma)*2 + x;
    var zemlja2 = (plasmanGrupe.C[j].Forma)*2 + x;
    var zemlja3 = (plasmanGrupe.C[k].Forma)*2 + y;
    var zemlja4 = (plasmanGrupe.C[l].Forma)*2 + y;

}
  if(zemlja1>zemlja2)
    {
        plasmanGrupe.C[i].Forma++;
        plasmanGrupe.C[j].Forma--;
        plasmanGrupe.C[j].Bodovi++;
        plasmanGrupe.C[i].Bodovi += 2;
        plasmanGrupe.C[i].Pobede++;
        plasmanGrupe.C[j].Porazi--;
        plasmanGrupe.C[i].PostKosevi += zemlja1;
        plasmanGrupe.C[i].PrimljKos +=zemlja2;
        plasmanGrupe.C[j].PostKosevi += zemlja2;
        plasmanGrupe.C[j].PrimljKos += zemlja1;
        if(kolo == 1)
            {
                plasmanGrupe.C[0].SSUD++;
                plasmanGrupe.C[2].USA--;
                plasmanGrupe.C[0].SSUDk = zemlja1 - zemlja2;
                plasmanGrupe.C[2].USAk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.C[0].PUER++;
                plasmanGrupe.C[3].USA--;
                plasmanGrupe.C[0].PUERk = zemlja1 - zemlja2;
                plasmanGrupe.C[3].USAk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.C[0].SRB++;
                plasmanGrupe.C[1].USA--;
                plasmanGrupe.C[0].SRBk = zemlja1 - zemlja2;
                plasmanGrupe.C[1].USAk = zemlja2 - zemlja1;
            }
    }
else if(zemlja1<zemlja2)
    {
        plasmanGrupe.C[i].Forma--;
        plasmanGrupe.C[j].Forma++;
        plasmanGrupe.C[j].Bodovi += 2;
        plasmanGrupe.C[i].Bodovi++;
        plasmanGrupe.C[j].Pobede++;
        plasmanGrupe.C[i].Porazi--;
        plasmanGrupe.C[j].PostKosevi += zemlja2;
        plasmanGrupe.C[j].PrimljKos +=zemlja1;
        plasmanGrupe.C[i].PostKosevi += zemlja1;
        plasmanGrupe.C[i].PrimljKos += zemlja2;
        if(kolo == 1)
            {
                plasmanGrupe.C[0].SSUD--;
                plasmanGrupe.C[2].USA++;
                plasmanGrupe.C[0].SSUDk = zemlja1 - zemlja2;
                plasmanGrupe.C[2].USAk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.C[0].PUER--;
                plasmanGrupe.C[3].USA++;
                plasmanGrupe.C[0].PUERk = zemlja1 - zemlja2;
                plasmanGrupe.C[3].USAk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.C[0].SRB--;
                plasmanGrupe.C[1].USA++;
                plasmanGrupe.C[0].SRBk = zemlja1 - zemlja2;
                plasmanGrupe.C[1].USAk = zemlja2 - zemlja1;
            }
    }
else{
    Math.random() > 0.5 ? zemlja1 : zemlja2
    if(zemlja1 > zemlja2)
    {
        zemlja1 += Math.floor(Math.random() * 10) + 1;
        plasmanGrupe.C[i].Forma++;
        plasmanGrupe.C[j].Forma--;
        plasmanGrupe.C[j].Bodovi++;
        plasmanGrupe.C[i].Bodovi += 2;
        plasmanGrupe.C[i].Pobede++;
        plasmanGrupe.C[j].Porazi--;
        plasmanGrupe.C[i].PostKosevi += zemlja1;
        plasmanGrupe.C[i].PrimljKos +=zemlja2;
        plasmanGrupe.C[j].PostKosevi += zemlja2;
        plasmanGrupe.C[j].PrimljKos += zemlja1;
        if(kolo == 1)
            {
                plasmanGrupe.C[0].SSUD++;
                plasmanGrupe.C[2].USA--;
                plasmanGrupe.C[0].SSUDk = zemlja1 - zemlja2;
                plasmanGrupe.C[2].USAk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.C[0].PUER++;
                plasmanGrupe.C[3].USA--;
                plasmanGrupe.C[0].PUERk = zemlja1 - zemlja2;
                plasmanGrupe.C[3].USAk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.C[0].SRB++;
                plasmanGrupe.C[1].USA--;
                plasmanGrupe.C[0].SRBk = zemlja1 - zemlja2;
                plasmanGrupe.C[1].USAk = zemlja2 - zemlja1;
            }
    }
    else{
        zemlja2 += Math.floor(Math.random() * 10) + 1;
        plasmanGrupe.C[i].Forma--;
        plasmanGrupe.C[j].Forma++;
        plasmanGrupe.C[j].Bodovi += 2;
        plasmanGrupe.C[i].Bodovi++;
        plasmanGrupe.C[j].Pobede++;
        plasmanGrupe.C[i].Porazi--;
        plasmanGrupe.C[j].PostKosevi += zemlja2;
        plasmanGrupe.C[j].PrimljKos +=zemlja1;
        plasmanGrupe.C[i].PostKosevi += zemlja1;
        plasmanGrupe.C[i].PrimljKos += zemlja2;
        if(kolo == 1)
            {
                plasmanGrupe.C[0].SSUD--;
                plasmanGrupe.C[2].USA++;
                plasmanGrupe.C[0].SSUDk = zemlja1 - zemlja2;
                plasmanGrupe.C[2].USAk = zemlja2 - zemlja1;
            }
            else if(kolo == 2)
            {
                plasmanGrupe.C[0].PUER--;
                plasmanGrupe.C[3].USA++;
                plasmanGrupe.C[0].PUERk = zemlja1 - zemlja2;
                plasmanGrupe.C[3].USAk = zemlja2 - zemlja1;
            }
            else if(kolo == 3){
                plasmanGrupe.C[0].SRB--;
                plasmanGrupe.C[1].USA++;
                plasmanGrupe.C[0].SRBk = zemlja1 - zemlja2;
                plasmanGrupe.C[1].USAk = zemlja2 - zemlja1;
            }
    }
}
 if(zemlja3>zemlja4)
    {
       plasmanGrupe.C[k].Forma++;
       plasmanGrupe.C[l].Forma--;
       plasmanGrupe.C[l].Bodovi++;
       plasmanGrupe.C[k].Bodovi += 2;
       plasmanGrupe.C[k].Pobede++;
       plasmanGrupe.C[l].Porazi--;
       plasmanGrupe.C[k].PostKosevi += zemlja3;
       plasmanGrupe.C[k].PrimljKos +=zemlja4;
       plasmanGrupe.C[l].PostKosevi += zemlja4;
       plasmanGrupe.C[l].PrimljKos += zemlja3;
       if(kolo == 1)
        {
            plasmanGrupe.C[1].PUER++;
            plasmanGrupe.C[3].SRB--;
            plasmanGrupe.C[1].PUERk = zemlja3 - zemlja4;
            plasmanGrupe.C[3].SRBk = zemlja4 - zemlja3;
        }
        else if(kolo == 2)
        {
            plasmanGrupe.C[1].SSUD++;
            plasmanGrupe.C[2].SRB--;
            plasmanGrupe.C[1].SSUDk = zemlja3 - zemlja4;
            plasmanGrupe.C[2].SRBk = zemlja4 - zemlja3;
        }
        else if(kolo == 3){
            plasmanGrupe.C[3].SSUD++;
            plasmanGrupe.C[2].PUER--;
            plasmanGrupe.C[3].SSUDk = zemlja3 - zemlja4;
            plasmanGrupe.C[2].PUERk = zemlja4 - zemlja3;
        }
    }
   else if(zemlja3 < zemlja4)
    {
       plasmanGrupe.C[k].Forma--;
       plasmanGrupe.C[l].Forma++;
       plasmanGrupe.C[l].Bodovi += 2;
       plasmanGrupe.C[k].Bodovi++;
       plasmanGrupe.C[l].Pobede++;
       plasmanGrupe.C[k].Porazi--;
       plasmanGrupe.C[l].PostKosevi += zemlja4;
       plasmanGrupe.C[l].PrimljKos +=zemlja3;
       plasmanGrupe.C[k].PostKosevi += zemlja3;
       plasmanGrupe.C[k].PrimljKos += zemlja4;
       if(kolo == 1)
        {
            plasmanGrupe.C[1].PUER--;
            plasmanGrupe.C[3].SRB++;
            plasmanGrupe.C[1].PUERk = zemlja3 - zemlja4;
            plasmanGrupe.C[3].SRBk = zemlja4 - zemlja3;
        }
        else if(kolo == 2)
        {
            plasmanGrupe.C[1].SSUD--;
            plasmanGrupe.C[2].SRB++;
            plasmanGrupe.C[1].SSUDk = zemlja3 - zemlja4;
            plasmanGrupe.C[2].SRBk = zemlja4 - zemlja3;
        }
        else if(kolo == 3){
            plasmanGrupe.C[3].SSUD--;
            plasmanGrupe.C[2].PUER++;
            plasmanGrupe.C[3].SSUDk = zemlja3 - zemlja4;
            plasmanGrupe.C[2].PUERk = zemlja4 - zemlja3;
        }
    }
    else
    {
        Math.random() > 0.5 ? zemlja1 : zemlja2
        if (zemlja3 > zemlja4)
        {
            zemlja3 += Math.floor(Math.random() * 10) + 1;
            plasmanGrupe.C[k].Forma++;
            plasmanGrupe.C[l].Forma--;
            plasmanGrupe.C[l].Bodovi++;
            plasmanGrupe.C[k].Bodovi += 2;
            plasmanGrupe.C[k].Pobede++;
            plasmanGrupe.C[l].Porazi--;
            plasmanGrupe.C[k].PostKosevi += zemlja3;
            plasmanGrupe.C[k].PrimljKos +=zemlja4;
            plasmanGrupe.C[l].PostKosevi += zemlja4;
            plasmanGrupe.C[l].PrimljKos += zemlja3;
            if(kolo == 1)
                {
                    plasmanGrupe.C[1].PUER++;
                    plasmanGrupe.C[3].SRB--;
                    plasmanGrupe.C[1].PUERk = zemlja3 - zemlja4;
                    plasmanGrupe.C[3].SRBk = zemlja4 - zemlja3;
                }
                else if(kolo == 2)
                {
                    plasmanGrupe.C[1].SSUD++;
                    plasmanGrupe.C[2].SRB--;
                    plasmanGrupe.C[1].SSUDk = zemlja3 - zemlja4;
                    plasmanGrupe.C[2].SRBk = zemlja4 - zemlja3;
                }
                else if(kolo == 3){
                    plasmanGrupe.C[3].SSUD++;
                    plasmanGrupe.C[2].PUER--;
                    plasmanGrupe.C[3].SSUDk = zemlja3 - zemlja4;
                    plasmanGrupe.C[2].PUERk = zemlja4 - zemlja3;
                }
        }
        else
        {
            zemlja4 += Math.floor(Math.random() * 10) + 1;
            plasmanGrupe.C[k].Forma--;
            plasmanGrupe.C[l].Forma++;
            plasmanGrupe.C[l].Bodovi += 2;
            plasmanGrupe.C[k].Bodovi++;
            plasmanGrupe.C[l].Pobede++;
            plasmanGrupe.C[k].Porazi--;
            plasmanGrupe.C[l].PostKosevi += zemlja4;
            plasmanGrupe.C[l].PrimljKos +=zemlja3;
            plasmanGrupe.C[k].PostKosevi += zemlja3;
            plasmanGrupe.C[k].PrimljKos += zemlja4;
            if(kolo == 1)
                {
                    plasmanGrupe.C[1].PUER--;
                    plasmanGrupe.C[3].SRB++;
                    plasmanGrupe.C[1].PUERk = zemlja3 - zemlja4;
                    plasmanGrupe.C[3].SRBk = zemlja4 - zemlja3;
                }
                else if(kolo == 2)
                {
                    plasmanGrupe.C[1].SSUD--;
                    plasmanGrupe.C[2].SRB++;
                    plasmanGrupe.C[1].SSUDk = zemlja3 - zemlja4;
                    plasmanGrupe.C[2].SRBk = zemlja4 - zemlja3;
                }
                else if(kolo == 3){
                    plasmanGrupe.C[3].SSUD--;
                    plasmanGrupe.C[2].PUER++;
                    plasmanGrupe.C[3].SSUDk = zemlja3 - zemlja4;
                    plasmanGrupe.C[2].PUERk = zemlja4 - zemlja3;
                }
        }
    }
console.log(data.C[i].Team + ":" + data.C[j].Team+" "+zemlja1+':'+zemlja2)
console.log(data.C[k].Team + ":" + data.C[l].Team+" "+zemlja3+':'+zemlja4)

}

console.log("Grupna faza:\nI kolo:")
IgraA(1);
IgraB(1);
IgraC(1);
console.log("Grupna faza:\nII kolo:")
IgraA(2);
IgraB(2);
IgraC(2);
console.log("Grupna faza:\nIII kolo:")
IgraA(3);
IgraB(3);
IgraC(3);

//Sortiranje u grupi A po Bodovima
for (var i=0; i< 3; i++)
{
    let minIndex = i;
    for(var j = i+1; j<4; j++)
    {
        if(plasmanGrupe.A[j].Bodovi < plasmanGrupe.A[minIndex].Bodovi)
        {
            minIndex = j;
        }
    }
    let temp = plasmanGrupe.A[minIndex];
    plasmanGrupe.A[minIndex] = plasmanGrupe.A[i];
    plasmanGrupe.A[i] = temp;
}

//Ukoliko 3 ekipe imaju isto bodova - sortiranje
for(let i =3; i<=2; i--)
{
    if((plasmanGrupe.A[i].Bodovi == plasmanGrupe.A[i-1].Bodovi) && (plasmanGrupe.A[i].Bodovi == plasmanGrupe.A[i-2].Bodovi) && (plasmanGrupe.A[i-1].Bodovi == plasmanGrupe.A[i-2].Bodovi))
    {
        if((plasmanGrupe.A[i].Razl > plasmanGrupe.A[i-1].Razl) && (plasmanGrupe.A[i].Razl > plasmanGrupe.A[i-2].Razl))
        {
            if(plasmanGrupe.A[i-1].Razl < plasmanGrupe.A[i-2].Razl)
            {
                let temp = plasmanGrupe.A[i-2];
                plasmanGrupe.A[i-2] = plasmanGrupe[i-1];
                plasmanGrupe.A[i-1] = temp;
            }
        }
        else if((plasmanGrupe.A[i-1].Razl > plasmanGrupe.A[i].Razl) && (plasmanGrupe.A[i-1].Razl > plasmanGrupe.A[i-2].Razl))
        {
            let temp = plasmanGrupe.A[i];
            plasmanGrupe.A[i] = plasmanGrupe[i-1];
            plasmanGrupe.A[i-1] = temp;
            if(plasmanGrupe.A[i-1].Razl < plasmanGrupe.A[i-2].Razl)
                {
                    let temp = plasmanGrupe.A[i-2];
                    plasmanGrupe.A[i-2] = plasmanGrupe[i-1];
                    plasmanGrupe.A[i-1] = temp;
                }
        }
        else if((plasmanGrupe.A[i-2].Razl > plasmanGrupe.A[i].Razl) && (plasmanGrupe.A[i-2].Razl > plasmanGrupe.A[i-1].Razl))
        {
            let temp = plasmanGrupe.A[i-2];
            plasmanGrupe.A[i] = plasmanGrupe[i-2];
            plasmanGrupe.A[i-2] = temp;
        }
    }
}

//Ukoliko 2 ekipe imaju isti broj bodova - sortiranje
for(let i=3; i<=1; i--)
{
 if(plasmanGrupe.A[i].Bodovi == plasmanGrupe.A[i-1].Bodovi)
  {
   if(plasmanGrupe.A[i-1].Razl > plasmanGrupe.A[i])
   {
        let temp = plasmanGrupe.A[i];
        plasmanGrupe.A[i] = plasmanGrupe[i-1];
        plasmanGrupe.A[i-1] = temp;
   }
  }
}

//Sortiranje u grupi B po Bodovima
for (var i=0; i< 3; i++)
    {
        let minIndex = i;
        for(var j = i+1; j<4; j++)
        {
            if(plasmanGrupe.B[j].Bodovi < plasmanGrupe.B[minIndex].Bodovi)
            {
                minIndex = j;
            }
        }
        let temp = plasmanGrupe.B[minIndex];
        plasmanGrupe.B[minIndex] = plasmanGrupe.B[i];
        plasmanGrupe.B[i] = temp;
    }

   //Ukoliko 3 ekipe imaju isto bodova - sortiranje
    for(let i =3; i<=2; i--)
    {
        if((plasmanGrupe.B[i].Bodovi == plasmanGrupe.B[i-1].Bodovi) && (plasmanGrupe.B[i].Bodovi == plasmanGrupe.B[i-2].Bodovi) && (plasmanGrupe.B[i-1].Bodovi == plasmanGrupe.B[i-2].Bodovi))
        {
            if((plasmanGrupe.B[i].Razl > plasmanGrupe.B[i-1].Razl) && (plasmanGrupe.B[i].Razl > plasmanGrupe.B[i-2].Razl))
            {
                if(plasmanGrupe.B[i-1].Razl < plasmanGrupe.B[i-2].Razl)
                {
                    let temp = plasmanGrupe.B[i-2];
                    plasmanGrupe.B[i-2] = plasmanGrupe[i-1];
                    plasmanGrupe.B[i-1] = temp;
                }
            }
            else if((plasmanGrupe.B[i-1].Razl > plasmanGrupe.B[i].Razl) && (plasmanGrupe.B[i-1].Razl > plasmanGrupe.B[i-2].Razl))
            {
                let temp = plasmanGrupe.B[i];
                plasmanGrupe.B[i] = plasmanGrupe[i-1];
                plasmanGrupe.B[i-1] = temp;
                if(plasmanGrupe.B[i-1].Razl < plasmanGrupe.B[i-2].Razl)
                    {
                        let temp = plasmanGrupe.B[i-2];
                        plasmanGrupe.B[i-2] = plasmanGrupe[i-1];
                        plasmanGrupe.B[i-1] = temp;
                    }
            }
            else if((plasmanGrupe.B[i-2].Razl > plasmanGrupe.B[i].Razl) && (plasmanGrupe.B[i-2].Razl > plasmanGrupe.B[i-1].Razl))
            {
                let temp = plasmanGrupe.B[i-2];
                plasmanGrupe.B[i] = plasmanGrupe[i-2];
                plasmanGrupe.B[i-2] = temp;
            }
        }
    }
   //Ukoliko 2 ekipe imaju isti broj bodova - sortiranje  
    for(let i=3; i<=1; i--)
    {
     if(plasmanGrupe.B[i].Bodovi == plasmanGrupe.B[i-1].Bodovi)
      {
       if(plasmanGrupe.B[i-1].Razl > plasmanGrupe.B[i])
       {
            let temp = plasmanGrupe.B[i];
            plasmanGrupe.B[i] = plasmanGrupe[i-1];
            plasmanGrupe.B[i-1] = temp;
       }
      }
    }

 //Sortiranje u grupi C po Bodovima
    for (var i=0; i< 3; i++)
        {
            let minIndex = i;
            for(var j = i+1; j<4; j++)
            {
                if(plasmanGrupe.C[j].Bodovi < plasmanGrupe.C[minIndex].Bodovi)
                {
                    minIndex = j;
                }
            }
            let temp = plasmanGrupe.C[minIndex];
            plasmanGrupe.C[minIndex] = plasmanGrupe.C[i];
            plasmanGrupe.C[i] = temp;
        }

//Ukoliko 3 ekipe imaju isto bodova - sortiranje 
        for(let i =3; i<=2; i--)
        {
            if((plasmanGrupe.C[i].Bodovi == plasmanGrupe.C[i-1].Bodovi) && (plasmanGrupe.C[i].Bodovi == plasmanGrupe.C[i-2].Bodovi) && (plasmanGrupe.C[i-1].Bodovi == plasmanGrupe.C[i-2].Bodovi))
            {
                if((plasmanGrupe.C[i].Razl > plasmanGrupe.C[i-1].Razl) && (plasmanGrupe.C[i].Razl > plasmanGrupe.C[i-2].Razl))
                {
                    if(plasmanGrupe.C[i-1].Razl < plasmanGrupe.C[i-2].Razl)
                    {
                        let temp = plasmanGrupe.C[i-2];
                        plasmanGrupe.C[i-2] = plasmanGrupe[i-1];
                        plasmanGrupe.C[i-1] = temp;
                    }
                }
                else if((plasmanGrupe.C[i-1].Razl > plasmanGrupe.C[i].Razl) && (plasmanGrupe.C[i-1].Razl > plasmanGrupe.C[i-2].Razl))
                {
                    let temp = plasmanGrupe.C[i];
                    plasmanGrupe.C[i] = plasmanGrupe[i-1];
                    plasmanGrupe.C[i-1] = temp;
                    if(plasmanGrupe.C[i-1].Razl < plasmanGrupe.C[i-2].Razl)
                        {
                            let temp = plasmanGrupe.C[i-2];
                            plasmanGrupe.C[i-2] = plasmanGrupe[i-1];
                            plasmanGrupe.C[i-1] = temp;
                        }
                }
                else if((plasmanGrupe.C[i-2].Razl > plasmanGrupe.C[i].Razl) && (plasmanGrupe.C[i-2].Razl > plasmanGrupe.C[i-1].Razl))
                {
                    let temp = plasmanGrupe.C[i-2];
                    plasmanGrupe.C[i] = plasmanGrupe[i-2];
                    plasmanGrupe.C[i-2] = temp;
                }
            }
        }

//Ukoliko 2 ekipe imaju isti broj bodova - sortiranje 
        for(let i=3; i<=1; i--)
        {
         if(plasmanGrupe.C[i].Bodovi == plasmanGrupe.C[i-1].Bodovi)
          {
           if(plasmanGrupe.C[i-1].Razl > plasmanGrupe.C[i])
           {
                let temp = plasmanGrupe.C[i];
                plasmanGrupe.C[i] = plasmanGrupe[i-1];
                plasmanGrupe.C[i-1] = temp;
           }
          }
        }


console.log('\n'+'Konačan plasman u grupama:')
console.log('Grupa A - Ime -pobede/porazi/bodovi/postignuti koševi/primljeni koševi/koš razlika')
console.log('1.'+ plasmanGrupe.A[3].Team +'   '+ plasmanGrupe.A[3].Pobede+'/'+plasmanGrupe.A[3].Porazi*(-1)+'/'+plasmanGrupe.A[3].Bodovi+'/'+plasmanGrupe.A[3].PostKosevi+'/'+plasmanGrupe.A[3].PrimljKos+'/' + (plasmanGrupe.A[3].PostKosevi - plasmanGrupe.A[3].PrimljKos))
console.log('2.'+ plasmanGrupe.A[2].Team +'   '+ plasmanGrupe.A[2].Pobede+'/'+plasmanGrupe.A[2].Porazi*(-1)+'/'+plasmanGrupe.A[2].Bodovi+'/'+plasmanGrupe.A[2].PostKosevi+'/'+plasmanGrupe.A[2].PrimljKos+'/' + (plasmanGrupe.A[2].PostKosevi - plasmanGrupe.A[2].PrimljKos))
console.log('3.'+ plasmanGrupe.A[1].Team +'   '+ plasmanGrupe.A[1].Pobede+'/'+plasmanGrupe.A[1].Porazi*(-1)+'/'+plasmanGrupe.A[1].Bodovi+'/'+plasmanGrupe.A[1].PostKosevi+'/'+plasmanGrupe.A[1].PrimljKos+'/' + (plasmanGrupe.A[1].PostKosevi - plasmanGrupe.A[1].PrimljKos))
console.log('4.'+ plasmanGrupe.A[0].Team +'   '+ plasmanGrupe.A[0].Pobede+'/'+plasmanGrupe.A[0].Porazi*(-1)+'/'+plasmanGrupe.A[0].Bodovi+'/'+plasmanGrupe.A[0].PostKosevi+'/'+plasmanGrupe.A[0].PrimljKos+'/' + (plasmanGrupe.A[0].PostKosevi - plasmanGrupe.A[0].PrimljKos))

console.log('Grupa B - Ime -pobede/porazi/bodovi/postignuti koševi/primljeni koševi/koš razlika')
console.log('1.'+ plasmanGrupe.B[3].Team +'   '+ plasmanGrupe.B[3].Pobede+'/'+plasmanGrupe.B[3].Porazi*(-1)+'/'+plasmanGrupe.B[3].Bodovi+'/'+plasmanGrupe.B[3].PostKosevi+'/'+plasmanGrupe.B[3].PrimljKos+'/' + (plasmanGrupe.B[3].PostKosevi - plasmanGrupe.B[3].PrimljKos))
console.log('2.'+ plasmanGrupe.B[2].Team +'   '+ plasmanGrupe.B[2].Pobede+'/'+plasmanGrupe.B[2].Porazi*(-1)+'/'+plasmanGrupe.B[2].Bodovi+'/'+plasmanGrupe.B[2].PostKosevi+'/'+plasmanGrupe.B[2].PrimljKos+'/' + (plasmanGrupe.B[2].PostKosevi - plasmanGrupe.B[2].PrimljKos))
console.log('3.'+ plasmanGrupe.B[1].Team +'   '+ plasmanGrupe.B[1].Pobede+'/'+plasmanGrupe.B[1].Porazi*(-1)+'/'+plasmanGrupe.B[1].Bodovi+'/'+plasmanGrupe.B[1].PostKosevi+'/'+plasmanGrupe.B[1].PrimljKos+'/' + (plasmanGrupe.B[1].PostKosevi - plasmanGrupe.B[1].PrimljKos))
console.log('4.'+ plasmanGrupe.B[0].Team +'   '+ plasmanGrupe.B[0].Pobede+'/'+plasmanGrupe.B[0].Porazi*(-1)+'/'+plasmanGrupe.B[0].Bodovi+'/'+plasmanGrupe.B[0].PostKosevi+'/'+plasmanGrupe.B[0].PrimljKos+'/' + (plasmanGrupe.B[0].PostKosevi - plasmanGrupe.B[0].PrimljKos))

console.log('Grupa C - Ime -pobede/porazi/bodovi/postignuti koševi/primljeni koševi/koš razlika')
console.log('1.'+ plasmanGrupe.C[3].Team +'   '+ plasmanGrupe.C[3].Pobede+'/'+plasmanGrupe.C[3].Porazi*(-1)+'/'+plasmanGrupe.C[3].Bodovi+'/'+plasmanGrupe.C[3].PostKosevi+'/'+plasmanGrupe.C[3].PrimljKos+'/' + (plasmanGrupe.C[3].PostKosevi - plasmanGrupe.C[3].PrimljKos))
console.log('2.'+ plasmanGrupe.C[2].Team +'   '+ plasmanGrupe.C[2].Pobede+'/'+plasmanGrupe.C[2].Porazi*(-1)+'/'+plasmanGrupe.C[2].Bodovi+'/'+plasmanGrupe.C[2].PostKosevi+'/'+plasmanGrupe.C[2].PrimljKos+'/' + (plasmanGrupe.C[2].PostKosevi - plasmanGrupe.C[2].PrimljKos))
console.log('3.'+ plasmanGrupe.C[1].Team +'   '+ plasmanGrupe.C[1].Pobede+'/'+plasmanGrupe.C[1].Porazi*(-1)+'/'+plasmanGrupe.C[1].Bodovi+'/'+plasmanGrupe.C[1].PostKosevi+'/'+plasmanGrupe.C[1].PrimljKos+'/' + (plasmanGrupe.C[1].PostKosevi - plasmanGrupe.C[1].PrimljKos))
console.log('4.'+ plasmanGrupe.C[0].Team +'   '+ plasmanGrupe.C[0].Pobede+'/'+plasmanGrupe.C[0].Porazi*(-1)+'/'+plasmanGrupe.C[0].Bodovi+'/'+plasmanGrupe.C[0].PostKosevi+'/'+plasmanGrupe.C[0].PrimljKos+'/' + (plasmanGrupe.C[0].PostKosevi - plasmanGrupe.C[0].PrimljKos))

//rangovi sadrzi prva 3 tima iz grupe A,B,C(sluzi mi za formiranje prva tri ranga)
//takodje i sadrzi ststistiku koja ce mi kasnije koristiti
var rangovi = [{Team: plasmanGrupe.A[3].Team, Bodovi: plasmanGrupe.A[3].Bodovi , Grupa: 'A', Forma: plasmanGrupe.A[3].Forma, Razl: (plasmanGrupe.A[3].PostKosevi - plasmanGrupe.A[3].PrimljKos), PostKosevi: plasmanGrupe.A[3].PostKosevi, BrojacPobeda: 0},
{Team: plasmanGrupe.B[3].Team, Bodovi: plasmanGrupe.B[3].Bodovi , Grupa: 'B', Forma: plasmanGrupe.B[3].Forma, Razl: (plasmanGrupe.B[3].PostKosevi - plasmanGrupe.B[3].PrimljKos), PostKosevi: plasmanGrupe.B[3].PostKosevi, BrojacPobeda: 0}, 
{Team: plasmanGrupe.C[3].Team, Bodovi: plasmanGrupe.C[3].Bodovi , Grupa: 'C', Forma: plasmanGrupe.C[3].Forma, Razl: (plasmanGrupe.C[3].PostKosevi - plasmanGrupe.C[3].PrimljKos), PostKosevi: plasmanGrupe.C[3].PostKosevi, BrojacPobeda: 0}];

//Sortiranje po Bodovima
rangovi.sort((obj1, obj2) => obj2.Bodovi - obj1.Bodovi);

//Sortiranje ukoliko sva tri imaji isti broj bodova
if((rangovi[0].Bodovi == rangovi[1].Bodovi) && (rangovi[0].Bodovi == rangovi[2].Bodovi))
{
    if((rangovi[0].Razl == rangovi[1].Razl) && (rangovi[0].Razl == rangovi[2].Razl))
    {
        rangovi.sort((obj1, obj2) => obj2.PostKosevi - obj1.PostKosevi);
    }
    else{
        rangovi.sort((obj1, obj2) => obj2.Razl - obj1.Razl);
    }
}

//Sortiranje ukoliko dva ranga imaju isti broj bodova
if(rangovi[0].Bodovi == rangovi[1].Bodovi)
    {
        if(rangovi[0].Razl == rangovi[1].Razl)
        {
            if(rangovi[0].PostKosevi < rangovi[1].PostKosevi)
            {
                let temp = rangovi[0];
                rangovi[0] = rangovi[1];
                rangovi[1] = temp;
            }
        }
        else{
            if(rangovi[0].Razl < rangovi[1].Razl)
            {
                let temp = rangovi[0];
                rangovi[0] = rangovi[1];
                rangovi[1] = temp;
            }
        }
}
else if(rangovi[1].Bodovi == rangovi[2].Bodovi)
{
    if(rangovi[1].Razl == rangovi[2].Razl)
        {
            if(rangovi[1].PostKosevi < rangovi[2].PostKosevi)
            {
                let temp = rangovi[1];
                rangovi[1] = rangovi[2];
                rangovi[2] = temp;
            }
        }
        else{
            if(rangovi[1].Razl < rangovi[2].Razl)
            {
                let temp = rangovi[1];
                rangovi[1] = rangovi[2];
                rangovi[2] = temp;
            }
        }
}

//rangovi sadrzi druga 3 tima iz grupe A,B,C(sluzi mi za formiranje 4,5,6 ranga)
//takodje i sadrzi ststistiku koja ce mi kasnije koristiti
var rangovi1 = [{Team: plasmanGrupe.A[2].Team, Bodovi: plasmanGrupe.A[2].Bodovi , Grupa: 'A', Forma: plasmanGrupe.A[2].Forma, Razl: (plasmanGrupe.A[2].PostKosevi - plasmanGrupe.A[2].PrimljKos), PostKosevi: plasmanGrupe.A[2].PostKosevi, BrojacPobeda: 0},
{Team: plasmanGrupe.B[2].Team, Bodovi: plasmanGrupe.B[2].Bodovi , Grupa: 'B', Forma: plasmanGrupe.B[2].Forma, Razl: (plasmanGrupe.B[2].PostKosevi - plasmanGrupe.B[2].PrimljKos), PostKosevi: plasmanGrupe.B[2].PostKosevi, BrojacPobeda: 0}, 
{Team: plasmanGrupe.C[2].Team, Bodovi: plasmanGrupe.C[2].Bodovi , Grupa: 'C', Forma: plasmanGrupe.C[2].Forma, Razl: (plasmanGrupe.C[2].PostKosevi - plasmanGrupe.C[2].PrimljKos), PostKosevi: plasmanGrupe.C[2].PostKosevi, BrojacPobeda: 0}];

//Sortiranje po Bodovima
rangovi1.sort((obj1, obj2) => obj2.Bodovi - obj1.Bodovi);

//Sortiranje ukoliko sva tri imaji isti broj bodova
if((rangovi1[0].Bodovi == rangovi1[1].Bodovi) && (rangovi1[0].Bodovi == rangovi1[2].Bodovi))
    {
        if((rangovi1[0].Razl == rangovi1[1].Razl) && (rangovi1[0].Razl == rangovi1[2].Razl))
        {
            rangovi1.sort((obj1, obj2) => obj2.PostKosevi - obj1.PostKosevi);
        }
        else{
            rangovi1.sort((obj1, obj2) => obj2.Razl - obj1.Razl);
        }
    }

 //Sortiranje ukoliko dva ranga imaju isti broj bodova 
    if(rangovi1[0].Bodovi == rangovi1[1].Bodovi)
        {
            if(rangovi1[0].Razl == rangovi1[1].Razl)
            {
                if(rangovi1[0].PostKosevi < rangovi1[1].PostKosevi)
                {
                    let temp = rangovi1[0];
                    rangovi1[0] = rangovi1[1];
                    rangovi1[1] = temp;
                }
            }
            else{
                if(rangovi1[0].Razl < rangovi1[1].Razl)
                {
                    let temp = rangovi1[0];
                    rangovi1[0] = rangovi1[1];
                    rangovi1[1] = temp;
                }
            }
    }
    else if(rangovi1[1].Bodovi == rangovi1[2].Bodovi)
    {
        if(rangovi1[1].Razl == rangovi1[2].Razl)
            {
                if(rangovi1[1].PostKosevi < rangovi1[2].PostKosevi)
                {
                    let temp = rangovi1[1];
                    rangovi1[1] = rangovi1[2];
                    rangovi1[2] = temp;
                }
            }
            else{
                if(rangovi1[1].Razl < rangovi1[2].Razl)
                {
                    let temp = rangovi1[1];
                    rangovi1[1] = rangovi1[2];
                    rangovi1[2] = temp;
                }
            }
    }

//rangovi sadrzi treca 3 tima iz grupe A,B,C(sluzi mi za formiranje 7,8,9 ranga)
//takodje i sadrzi ststistiku koja ce mi kasnije koristiti
var rangovi2 = [{Team: plasmanGrupe.A[1].Team, Bodovi: plasmanGrupe.A[1].Bodovi , Grupa: 'A', Forma: plasmanGrupe.A[1].Forma, Razl: (plasmanGrupe.A[1].PostKosevi - plasmanGrupe.A[1].PrimljKos), PostKosevi: plasmanGrupe.A[1].PostKosevi, BrojacPobeda: 0},
    {Team: plasmanGrupe.B[1].Team, Bodovi: plasmanGrupe.B[1].Bodovi , Grupa: 'B', Forma: plasmanGrupe.B[1].Forma, Razl: (plasmanGrupe.B[1].PostKosevi - plasmanGrupe.B[1].PrimljKos), PostKosevi: plasmanGrupe.B[1].PostKosevi, BrojacPobeda: 0}, 
    {Team: plasmanGrupe.C[1].Team, Bodovi: plasmanGrupe.C[1].Bodovi , Grupa: 'C', Forma: plasmanGrupe.C[1].Forma, Razl: (plasmanGrupe.C[1].PostKosevi - plasmanGrupe.C[1].PrimljKos), PostKosevi: plasmanGrupe.C[1].PostKosevi, BrojacPobeda: 0}];

//Sortiranje po Bodovima
rangovi2.sort((obj1, obj2) => obj2.Bodovi - obj1.Bodovi);

//Sortiranje ukoliko sva tri imaji isti broj bodova
if((rangovi2[0].Bodovi == rangovi2[1].Bodovi) && (rangovi2[0].Bodovi == rangovi2[2].Bodovi))
    {
        if((rangovi2[0].Razl == rangovi2[1].Razl) && (rangovi2[0].Razl == rangovi2[2].Razl))
        {
            rangovi2.sort((obj1, obj2) => obj2.PostKosevi - obj1.PostKosevi);
        }
        else{
            rangovi2.sort((obj1, obj2) => obj2.Razl - obj1.Razl);
        }
    }

   //Sortiranje ukoliko dva ranga imaju isti broj bodova  
    if(rangovi2[0].Bodovi == rangovi2[1].Bodovi)
        {
            if(rangovi2[0].Razl == rangovi2[1].Razl)
            {
                if(rangovi2[0].PostKosevi < rangovi2[1].PostKosevi)
                {
                    let temp = rangovi2[0];
                    rangovi2[0] = rangovi2[1];
                    rangovi2[1] = temp;
                }
            }
            else{
                if(rangovi2[0].Razl < rangovi2[1].Razl)
                {
                    let temp = rangovi2[0];
                    rangovi2[0] = rangovi2[1];
                    rangovi2[1] = temp;
                }
            }
    }
    else if(rangovi2[1].Bodovi == rangovi2[2].Bodovi)
    {
        if(rangovi2[1].Razl == rangovi2[2].Razl)
            {
                if(rangovi2[1].PostKosevi < rangovi2[2].PostKosevi)
                {
                    let temp = rangovi2[1];
                    rangovi2[1] = rangovi2[2];
                    rangovi2[2] = temp;
                }
            }
            else{
                if(rangovi2[1].Razl < rangovi2[2].Razl)
                {
                    let temp = rangovi2[1];
                    rangovi2[1] = rangovi2[2];
                    rangovi2[2] = temp;
                }
            }
    }

console.log('\nŠeširi:')

console.log('Šešir D\n'+rangovi[0].Team+'\n'+rangovi[1].Team)
console.log('Šešir E\n'+rangovi[2].Team+'\n'+rangovi1[0].Team)
console.log('Šešir F\n'+rangovi1[1].Team+'\n'+rangovi1[2].Team)
console.log('Šešir G\n'+rangovi2[0].Team+'\n'+rangovi2[1].Team)

//promenjive koje mi pomazu u pronalazenju slucajnih parova
var oneOrZero = (Math.random()>0.5)? 1 : 0;
var oneOrZero1 = (Math.random()>0.5)? 1 : 0;
var tmpOneOrZero;
var tmpOneOrZero1;
if(oneOrZero == 1)
{
    tmpOneOrZero = 0;
}
else
{
    tmpOneOrZero = 1;
}

if(oneOrZero1 == 1)
    {
        tmpOneOrZero1 = 0;
    }
    else
    {
        tmpOneOrZero1 = 1;
    }

//izabiranje prva dva para za cetvrtfinale
if(rangovi[oneOrZero].Grupa == rangovi2[oneOrZero1].Grupa)
{
    if(oneOrZero1 == 1)
    {
        var prviPar =[rangovi[oneOrZero], rangovi2[0]];

        var dugiPar =[rangovi[tmpOneOrZero], rangovi2[1]];
    }
    else{
        var prviPar =[rangovi[oneOrZero], rangovi2[1]];
        var dugiPar =[rangovi[tmpOneOrZero], rangovi2[0]];
    }
}
else if(rangovi[tmpOneOrZero].Grupa == rangovi2[tmpOneOrZero1].Grupa)
{
    if(tmpOneOrZero1 == 1)
        {
            var prviPar =[rangovi[tmpOneOrZero], rangovi2[0]];
    
            var dugiPar =[rangovi[oneOrZero], rangovi2[1]];
        }
        else{
            var prviPar =[rangovi[tmpOneOrZero], rangovi2[1]];
            var dugiPar =[rangovi[oneOrZero], rangovi2[0]];
        }
}
else{
    var prviPar =[rangovi[oneOrZero], rangovi2[oneOrZero1]];
    var dugiPar =[rangovi[tmpOneOrZero], rangovi2[tmpOneOrZero1]];
}

var tmpRangovi = [rangovi[2], rangovi1[0]];
var tmpRangovi2 = [rangovi1[1], rangovi1[2]];

var oneOrZ = (Math.random()>0.5)? 1 : 0;
var OneOrZ1 = (Math.random()>0.5)? 1 : 0;
var tmpOneOrZ;
var tmpOneOrZ1;
if(oneOrZ == 1)
{
    tmpOneOrZ = 0;
}
else
{
    tmpOneOrZ = 1;
}

if(OneOrZ1 == 1)
    {
        tmpOneOrZ1 = 0;
    }
    else
    {
        tmpOneOrZ1 = 1;
    }

//biranje treceg i cetvrtog para za cetvrtfinale
if(tmpRangovi[oneOrZ].Grupa == tmpRangovi2[OneOrZ1].Grupa)
{
    if(OneOrZ1 == 1)
    {
        var treciPar =[tmpRangovi[oneOrZ], tmpRangovi2[0]];

        var cetvrtiPar =[tmpRangovi[tmpOneOrZ], tmpRangovi2[1]];
    }
    else{
        var treciPar =[tmpRangovi[oneOrZ], tmpRangovi2[1]];
        var cetvrtiPar =[tmpRangovi[tmpOneOrZ], tmpRangovi2[0]];
    }
}
else if(tmpRangovi[tmpOneOrZ].Grupa == tmpRangovi2[tmpOneOrZ1].Grupa)
{
    if(tmpOneOrZ1 == 1)
        {
            var treciPar =[tmpRangovi[tmpOneOrZ], tmpRangovi2[0]];
    
            var cetvrtiPar =[tmpRangovi[oneOrZ], tmpRangovi2[1]];
        }
        else{
            var treciPar =[tmpRangovi[tmpOneOrZ], tmpRangovi2[1]];
            var cetvrtiPar =[tmpRangovi[oneOrZ], tmpRangovi2[0]];
        }
}
else{
    var treciPar =[tmpRangovi[oneOrZ], tmpRangovi2[OneOrZ1]];
    var cetvrtiPar =[tmpRangovi[tmpOneOrZ], tmpRangovi2[tmpOneOrZ1]];
}

//Odredjivanje koji par gde ce se sastati u polufinalu
var rand = (Math.random()>0.5)? 1 : 0;
var rand1 = (Math.random()>0.5)? 1 : 0;
var tmpPolufinale = [prviPar, dugiPar];
var tmpPolufinale1 = [treciPar, cetvrtiPar];

if(rand == 1)
    {
      var  tmpRand = 0;
    }
else
    {
      var  tmpRand = 1;
    }
 if(rand1 == 1)
        {
          var  tmpRand1 = 0;
        }
else
        {
          var  tmpRand1 = 1;
        }

//Odredjivanje kostura za polufinale
var polufinale = [tmpPolufinale[rand],tmpPolufinale1[rand1]];
var polufinale1 = [tmpPolufinale[tmpRand],tmpPolufinale1[tmpRand1]];

console.log("\nEliminaciona Faza:")
console.log(polufinale[0][0].Team+'-'+polufinale[0][1].Team)
console.log(polufinale[1][0].Team+'-'+polufinale[1][1].Team)

console.log("\n"+polufinale1[0][0].Team+'-'+polufinale1[0][1].Team)
console.log(polufinale1[1][0].Team+'-'+polufinale1[1][1].Team)

//funkcija za odredjivanje pobednika
function IgraPolufinale(prvi, drugi)
{
let x = Math.floor(Math.random() * 50) + 60;


    var zemlja1 = (prvi.Forma)*2 + x;
    var zemlja2 = (drugi.Forma)*2 + x;
    
  if(zemlja1>zemlja2)
    {
        prvi.Forma++;
        drugi.Forma--;
        prvi.BrojacPobeda++;
    }
else if(zemlja1<zemlja2)
    {
        prvi.Forma--;
        drugi.Forma++;
        drugi.BrojacPobeda++;
    }
else{
    Math.random() > 0.5 ? zemlja1 : zemlja2
    if(zemlja1 > zemlja2)
    {
        zemlja1 += Math.floor(Math.random() * 10) + 1;
        prvi.Forma++;
        drugi.Forma--;
        prvi.BrojacPobeda++;
    }
    else{
        zemlja2 += Math.floor(Math.random() * 10) + 1;
        prvi.Forma--;
        drugi.Forma++;
        drugi.BrojacPobeda++;
    }
} 

    console.log(prvi.Team + ":" + drugi.Team+" "+zemlja1+':'+zemlja2)

}

console.log("\nČetvrtfinale:")
IgraPolufinale(polufinale[0][0], polufinale[0][1]);
IgraPolufinale(polufinale[1][0], polufinale[1][1]);
console.log('\n');

//Odredjivanje prvog para za polufinale
var poluf = [];
if (polufinale[0][0].BrojacPobeda == 1)
{
    poluf[0] = polufinale[0][0];
}
else{
    poluf[0] = polufinale[0][1];
}
if (polufinale[1][0].BrojacPobeda == 1)
{
    poluf[1] = polufinale[1][0];
}
else{
    poluf[1] = polufinale[1][1];
}


IgraPolufinale(polufinale1[0][0], polufinale1[0][1]);
IgraPolufinale(polufinale1[1][0], polufinale1[1][1]);

//Odredjivanje drugog para za polufinale
var poluf1 = [];
if (polufinale1[0][0].BrojacPobeda == 1)
{
    poluf1[0] = polufinale1[0][0];
}
else{
    poluf1[0] = polufinale1[0][1];
}
if (polufinale1[1][0].BrojacPobeda == 1)
{
    poluf1[1] = polufinale1[1][0];
}
else{
    poluf1[1] = polufinale1[1][1];
}
console.log("\nPolufinale:")
IgraPolufinale(poluf[0], poluf[1]);
IgraPolufinale(poluf1[0], poluf1[1]);

//Odredjivanje protivnika za finale i trece mesto
var finale = [];
var treceMesto = [];
if (poluf[0].BrojacPobeda == 2)
{
    finale[0] = poluf[0];
    treceMesto[0] = poluf[1];
}
else{
    finale[0] = poluf[1];
    treceMesto[0] = poluf[0];
}
if (poluf1[0].BrojacPobeda == 2)
{
    finale[1] = poluf1[0];
    treceMesto[1] = poluf1[1];
}
else{
    finale[1] = poluf1[1];
    treceMesto[1] = poluf1[0];
}

console.log("\nUtakmica za treće mesto:")
IgraPolufinale(treceMesto[0], treceMesto[1]);


console.log("\nFinale:")
IgraPolufinale(finale[0], finale[1]);

console.log("\nMedalje:")
if(finale[0].BrojacPobeda == 3)
{
    console.log("1." + finale[0].Team);
    console.log("2." + finale[1].Team);
}
else{
    console.log("1." + finale[1].Team);
    console.log("2." + finale[0].Team);
}

if(treceMesto[0].BrojacPobeda == 2){
    console.log("3." + treceMesto[0].Team);
}
else{
    console.log("3." + treceMesto[1].Team);
}
