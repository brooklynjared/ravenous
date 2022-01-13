const apiKey = 'IVjJXk4BrU7unXV8DLUMje-nIDTMU4VLf1CByWvzCRUs3lEmZRfPVaidc2Rzj-vdt90Em0ao9_v8SH2mQPN6Iod_BqlZRsb1z1a3gprGSYFZGY3L2vgAh9WHyk_gYXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count 
                      }
                });
            }
        })
    }
};

export default Yelp;