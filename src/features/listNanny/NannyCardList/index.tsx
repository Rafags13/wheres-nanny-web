import { FlatList, ListRenderItem, ListRenderItemInfo } from "react-native"
import NannyCard, { NannyCardProps } from "./NannyCard"

type Props = {
    nannyList: NannyCardProps[]

}

export default function NannyCardList({ nannyList }: Props) {
    return (
        <FlatList
            data={nannyList}
            scrollEnabled={false}
            renderItem={(item: ListRenderItemInfo<NannyCardProps>) => {
                const { fullname, rankCommentCount, starsCounting, id, imageUri } = item.item;

                return (
                    <NannyCard fullname={fullname} starsCounting={starsCounting} rankCommentCount={rankCommentCount} id={id} imageUri={imageUri} />
                )
            }}
            contentContainerStyle={{ gap: 20, paddingVertical: 10 }}
        />
    )
}