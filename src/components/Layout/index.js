import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../Sidebar"
import MenuBar from '../MenuBar'
import GlobaStyles from '../../styles/global'

import * as S from './styled'


const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobaStyles />
      <Sidebar />   
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
