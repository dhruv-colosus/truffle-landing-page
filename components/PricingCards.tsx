import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LinkButton from "@/components/ui/LinkButton";

type Plan = {
    name: string;
    price: string;
    features: string[]
    action: string,
    period?: string,
    popular: boolean;
    href: string;
};

const PricingCards = () => {

    // Dummy Data
    const plans: Plan[] = [
        {
            name: "BASIC",
            price: "FREE",
            features: [
                "everything in basic",
                "Unified inbox for all communications",
                "Agent & contractor coordination",
                "Smart calendar management",
                "Priority search results",
                "Advanced filters"
            ],
            action: "Get Started",
            popular: false,
            href: '/'
        },
        {
            name: "PRO",
            price: "$99",
            period: "/mo",
            features: [
                "everything in basic",
                "Unified inbox for all communications",
                "Agent & contractor coordination",
                "Smart calendar management",
                "Priority search results",
                "Advanced filters",
            ],
            action: "Start Pro Trial",
            popular: true,
            href: '/'

        },
        {
            name: "Elite",
            price: "$49",
            period: "/mo",
            features: [
                "everything in PRO",
                "Full project management suite",
                "Contractor vetting & reviews",
                "Investment analysis tools",
                "Legal document management",
                "Investment analysis tools",
                "White-glove concierge service"
            ],
            action: "GET ULTRA",
            popular: false,
            href: '/'
        }
    ];

    return (
        <div className="font-display flex justify-center gap-8 w-full max-lg:flex-wrap">
            {plans.map((plan, index) => (
                <Card
                    key={index}
                    className={`relative min-w-[300px] max-md:min-w-[400px] rounded-[20px] justify-between border-2 border-truffle-green-dark ${plan.popular
                        ? 'bg-truffle-green text-white'
                        : 'bg-card max-lg:order-1'
                        }`}
                >
                    {plan.popular && (
                        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-truffle-mint text-truffle-green border-2 border-truffle-green-dark rounded-full w-[60%] text-center py-[4px] text-lg font-semibold">
                            Most Popular
                        </span>
                    )}

                    <div>

                        <CardHeader className={`text-center mb-6 ${plan.popular ? 'text-truffle-mint' : 'text-truffle-green-dark'}`}>
                            <CardTitle className={`text-3xl font-bold mt-4 `}>
                                {plan.name}
                            </CardTitle>
                            <div className="mb-4 space-x-4">
                                <span className={`text-6xl font-bold`}>
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className={`font-bold text-2xl`}> {plan.period}
                                    </span>
                                )}
                            </div>
                            <hr className={`h-[2px] border-none ${plan.popular ? 'bg-truffle-mint' : 'bg-truffle-green-dark'}`} />
                        </CardHeader>

                        <CardContent>
                            <ul className="space-y-1.5 mb-4 font-semibold">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <div className={`size-4 mr-3 rounded-full bg-truffle-mint border-2 border-truffle-green-dark`} />

                                        <span className={`text-lg ${plan.popular ? 'text-white' : 'text-truffle-green-dark'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </div>

                    <LinkButton className="mx-auto" href={plan.href}> {plan.action}</LinkButton>
                </Card>
            ))}
        </div>
    );
};

export default PricingCards;