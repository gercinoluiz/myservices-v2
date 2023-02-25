import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Modal } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import { useState } from 'react'
import { useImageModal } from '../../hooks/ImageModalHook'

export interface ImageModalTemporaryProps {
     images: any
     
}

const ImageModalTemporary: React.FC<ImageModalTemporaryProps> = ({
     images,
}: ImageModalTemporaryProps) => {
     const { visible, setHidden, index } = useImageModal()

     return (
          <Modal visible={visible}>
               <ImageViewer
                    imageUrls={images}
                    onClick={() => setHidden()}
                    index={index}
               ></ImageViewer>
          </Modal>
     )
}

export default ImageModalTemporary

// () => Linking.openURL(data.contact_info.website)} style={styles.iconsContainer}

// <Gallery
// style={{ flex: 1 }}
// images={[
//      {
//           source: {
//                uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//           },
//      },
//      {
//           source: {
//                uri: 'https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80',
//           },
//      },
//      {
//           source: {
//                uri: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//           },
//      },
//      {
//           source: {
//                uri: 'https://images.unsplash.com/photo-1605918354488-a554abe7faf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80',
//           },
//      },
//      {
//           source: {
//                uri: 'https://sp-lazer.prismic.io/medias/?open=YRFCSBMAACMANL4F',
//           },
//      },
//      {
//           source: {
//                uri: 'https://images.unsplash.com/photo-1523703591032-c582f1eedf32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
//           },
//      },
//      {
//           source: {
//                uri: 'https://images.unsplash.com/photo-1607962252666-2c33af3c6ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80',
//           },
//      },
// ]}
// ></Gallery>
