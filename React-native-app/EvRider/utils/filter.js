const dummy = require('./dummyData').data;

const optType = {
    type : [ 'Public', 'Turbo' ],
    price : 100,
    connector : [ 'css_sae' ],
    rating : 4.3,
    state : ''
}


module.exports.filter =  ( options = [ 'type', 'price', 'connector', 'rating'] , optTypes = optType , data ) =>{


    var result = dummy
    // console.log( result, "hello" )
    options.forEach( opt =>{

        switch (opt){

            case 'type':

            var temp = []
            optTypes['type'].forEach( type =>{

                let t = result.filter( res => res.typeOfStation == type  )
                temp.push( t )
                

            })

            // console.log( temp[0], "case type" )

            result = temp[0] ;


            break;

            case 'connector':

            console.log("case connector")
            var temp = []
            optTypes['connector'].forEach( type =>{

                for ( let res of result ){

                    if ( res.slots != undefined ){

                        var status = res.slots.some( slot =>{
                            return slot.connector == type && slot.status == true;
                        })
    
                        if ( status == true ){
                            temp.push(res)
                        }

                    }

                }

                // console.log(temp)
                result = temp
                

            })

            // console.log( temp )
            result = temp;

            break;

            case 'price':

            console.log( "price case" )

            var temp = []
            // console.log( result[0] )
            for ( let res of result ){

                // console.log( res.price  )
                if ( res.price >= optTypes['price'] ) {
                    temp.push( res )
                }

            }

            result = temp


            break;

            case 'rating':

            console.log(" rating case ")
            var temp = []
            // console.log( result[0] )
            for ( let res of result ){

                // console.log( res.price  )
                if ( res.rating >= optTypes['rating'] ) {
                    temp.push( res )
                }

            }

            result = temp


            break;

            case 'state':

            break;


        }

    } )

    return result;

}