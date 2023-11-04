// import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ReactNode, useCallback, useMemo } from "react";
import { View } from 'react-native';
import styles from "./style";

type Props = {
    children: ReactNode
};

export default function Modal({ children }: Props) {
    return (
        <View>
            {children}
        </View>
    )
    // const renderBackdrop = useCallback((props: any) => (
    //     <BottomSheetBackdrop
    //         {...props}
    //         disappearsOnIndex={0}
    //         appearsOnIndex={1}
    //     />
    // ),
    //     []
    // );

    // const snapPoints = useMemo(() => ['20%', '70%'], []);

    // return (
    //     <BottomSheet
    //         index={0}
    //         snapPoints={snapPoints}
    //         backdropComponent={renderBackdrop}
    //     >
    //         <BottomSheetScrollView contentContainerStyle={styles.modalContainer} showsVerticalScrollIndicator={false}>
    //             {children}
    //         </BottomSheetScrollView>
    //     </BottomSheet>
    // )
}