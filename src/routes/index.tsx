import { QueryClient, QueryClientProvider } from "react-query";
import StackNavigator from "./StackNavigator";
import CurrentModal from "@components/CurrentModal";
import Spinner from "@components/Spinner";
import { useState } from "react";
import Splash from "@pages/Splash";

const queryClient = new QueryClient();

export default function Routes() {
    const [finished, setFinished] = useState(false);
    return (
        <QueryClientProvider client={queryClient}>
            <CurrentModal />
            {
                finished ?
                    (
                        <StackNavigator />
                    ) :
                    (<Splash onComplete={(value: boolean) => setFinished(value)} />)}
            <Spinner />
        </QueryClientProvider>
    )
}