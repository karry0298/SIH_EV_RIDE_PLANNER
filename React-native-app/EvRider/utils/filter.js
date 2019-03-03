const dummy = require('./dummyData').data;

const optType = {
    type : [ 'Public', 'Turbo' ],
    price : 'lt100',
    connector : [ 'css_sae' ],
    rating : 4.3,
    state : '',
    women : true
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
                temp = temp.concat(t)
                console.log(temp.length, t.length , "lengths")
                

            })

            result = temp ;


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

            

            var temp = []
            
            var val = optTypes['price'];

            console.log( "price case" , val)

            switch (val){

                case 'lt100':

                for ( let res of result ){

                    // console.log( res.price  )
                    if ( res.price < 101 ) {
                        temp.push( res )
                    }
    
                }

                break;

                case 'b100200':

                for ( let res of result ){

                    // console.log( res.price  )
                    if ( res.price > 100 && res.price <= 200  ) {
                        temp.push( res )
                    }
    
                }

                // console.log(temp)

                break;

                case 'g200':

                for ( let res of result ){

                    // console.log( res.price  )
                    if ( res.price > 200  ) {
                        temp.push( res )
                    }
    
                }

                break;

                default:
                    temp = result;

            }


            result = temp;


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

            case 'women':

            result = result.filter( res => res.socialRating.womenSafety > 3.5 )
            // temp = temp.concat(t)
            console.log( result.length , "lengths")

            break;


        }

    } )

    return result;

}