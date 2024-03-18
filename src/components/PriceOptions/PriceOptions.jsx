import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "30",
            "features": [
                "Access to cardio equipment",
                "Limited access to weight training area",
                "Group fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": "50",
            "features": [
                "Access to cardio equipment",
                "Full access to weight training area",
                "Group fitness classes",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "80",
            "features": [
                "Access to cardio equipment",
                "Full access to weight training area",
                "Group fitness classes",
                "Access to sauna and steam room",
                "Personal trainer sessions (2x/month)"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;