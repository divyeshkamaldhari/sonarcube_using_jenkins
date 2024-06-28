import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const ProductCertificate = ({ productDetail }) => {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    document: { width: 700, height: 500 },
    title: { fontSize: 25 },
    text: { fontSize: 20 },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Product Name</Text>
          <Text style={styles.text}> {productDetail?.productName}</Text>
          <Text style={styles.title}>Product ID</Text>
          <Text style={styles.text}>{productDetail?.productId}</Text>
          <Text style={styles.title}>SKU</Text>
          <Text style={styles.text}>{productDetail?.sku}</Text>
          <Text style={styles.title}>Weight(kg)</Text>
          <Text style={styles.text}>{productDetail?.weight}</Text>
          <Text style={styles.title}>Stock Count</Text>
          <Text style={styles.text}>{productDetail?.stockCount}</Text>
          <Text style={styles.title}>Delivery Date</Text>
          <Text style={styles.text}>{productDetail?.deliveryDate}</Text>
          <Text style={styles.title}>Test</Text>
          <Text style={styles.text}>{productDetail?.test}</Text>
          <Text style={styles.title}>Status</Text>
          <Text style={styles.text}>{productDetail?.testStatus}</Text>
          <Text style={styles.title}>Test Date</Text>
          <Text style={styles.text}>{productDetail?.testDate}</Text>
          <Text style={styles.title}>Δ9-THC</Text>
          <Text style={styles.text}>{productDetail?.delta9THC}</Text>
          <Text style={styles.title}>(6aR,9R,10aR)-HHC acetate</Text>
          <Text style={styles.text}>{productDetail?.HHCAcetate}</Text>
          <Text style={styles.title}>Total Cannabinoids</Text>
          <Text style={styles.text}>{productDetail?.cannabinoidsPercent}</Text>
          <Text style={styles.title}>Moisture Content</Text>
          <Text style={styles.text}>{productDetail?.moistureContent}</Text>
          <Text style={styles.title}>Foreign Matter</Text>
          <Text style={styles.text}>{productDetail?.foreignMatter}</Text>
          <Text style={styles.title}>Internal Standard Normalization</Text>
          <Text style={styles.text}>
            {productDetail?.internalStandardNormalization}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ProductCertificate;
