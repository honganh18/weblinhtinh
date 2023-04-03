import { firestore } from '../firebase';
import { useEffect, useState } from 'react';


export const Home = () => {
    useEffect(() => {
        firestore.get('data').then((data) => {
            console.log(data,'data');
            
          setPhotos(data)
        }); 
      }, [])
    
      
      
      const [photos, setPhotos] = useState<{ id: string, src: string }[]>([])
    return (
        <div className="App">
            <div className="brick-container">
                {
                    photos?.map((photo) => (
                        <div key={photo.id}>
                            <img src={photo.src} alt={photo.id} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}