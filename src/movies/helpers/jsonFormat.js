




export const jsonFormat = (galery,type,category) => {
    const genders = [
        {
            'section':1,
            'gender':type
        },
        {
            'section':2,
            'gender':type
        },
        {
            'section':3,
            'gender':type
        }
    ]
    let firstPart = 0;
    let lastPart = 4;
    let imagesCollection = [];
    let imagesCollectionFinal = [];
    let object = {};
    genders.forEach((properties, i) => {
        imagesCollection = galery.slice(firstPart, lastPart);
        if(genders.length - 1 === i){
            object={
                identifier:`section${category}${properties.gender}${i}`,
                after:`section${category}${properties.gender}0`,
                before:`section${category}${properties.gender}${i-1}`,
                collection:imagesCollection
            }
       }else if(0 === i){
        object={
            identifier:`section${category}${properties.gender}${i}`,
            after:`section${category}${properties.gender}${i+1}`,
            before:`section${category}${properties.gender}${genders.length - 1}`,
            collection:imagesCollection
        }
       }else{
        object={
            identifier:`section${category}${properties.gender}${i}`,
            after:`section${category}${properties.gender}${i+1}`,
            before:`section${category}${properties.gender}${i-1}`,
            collection:imagesCollection
        }
       }
       firstPart+=5;
       lastPart+=5;
       imagesCollectionFinal.push(object);
    });
  return (
    imagesCollectionFinal
  )
}
