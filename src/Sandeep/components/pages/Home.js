import React from 'react'
import ProdDescription from '../prodInfo/js_files/prodDescription'
import FeatureDescription from '../prodInfo/js_files/featureDescription'
import Data from '../prodInfo/js_files/prodFeatureDescription'
function Home() {
    return (
        <div>
            <ProdDescription></ProdDescription>
            <FeatureDescription title={Data.dbCard.title} text={Data.dbCard.text} path={Data.dbCard.path} name={Data.dbCard.name} />
            <FeatureDescription title={Data.perfCard.title} text={Data.perfCard.text} path={Data.perfCard.path} name={Data.perfCard.name} />
            <FeatureDescription title={Data.commCard.title} text={Data.commCard.text} path={Data.commCard.path} name={Data.commCard.name} />
        </div>
    )
}

export default Home
