/* eslint-disable no-unused-vars */
import SidebarLayout from '../../layouts/SidebarLayout'
import SurahListContainer from '../../containers/Quran/SurahListContainer'
import ScrollIndicator from '../../components/Indicator/ScrollIndicator'

export default function QuranDigital() {
    return (
        <>
            <ScrollIndicator />
            <SidebarLayout>
                <SurahListContainer />
            </SidebarLayout>
        </>
    )
}
