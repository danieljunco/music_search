import React from 'react'
import styled from 'styled-components'


export default function AppContainer({children}:React.ComponentPropsWithoutRef<"div">) {
    return (
        <AppContainerRaw>
            {children}
        </AppContainerRaw>
    )
}



const AppContainerRaw = styled.div`
    display: flex;
`