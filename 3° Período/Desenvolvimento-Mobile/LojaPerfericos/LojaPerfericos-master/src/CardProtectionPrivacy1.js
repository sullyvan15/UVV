import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CardProtectionPrivacy1(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.protectionPrivacy}>
        <View style={styles.rectangle471}>
          <Text style={styles.protectionAndPriva}>Protection and Privacy</Text>
          <Text style={styles.helpProtectYourWe}>
            Help protect your website and its users with clear and fair website
            terms and conditions. These terms and conditions for a website set
            out key issues such as acceptable use, privacy, cookies,
            registration and passwords, intellectual property, links to other
            sites, termination and disclaimers of responsibility. Terms and
            conditions are used and necessary to protect a website owner from
            liability of a user relying on the information or the goods provided
            from the site then suffering a loss.{"\n"}
            {"\n"}Making your own terms and conditions for your website is hard,
            not impossible, to do. It can take a few hours to few days for a
            person with no legal background to make. But worry no more; we are
            here to help you out.
          </Text>
          <Text style={styles.claimBack}>Claim back</Text>
          <Text style={styles.otherThanTheConte}>
            Other than the content you own, under these Terms, Company Name
            and/or its licensors own all the intellectual property rights and
            materials contained in this Website.{"\n"}
            {"\n"}You are granted limited license only for purposes of viewing
            the material contained on this Website.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  protectionPrivacy: {
    width: 375,
    height: 657
  },
  rectangle471: {
    width: 375,
    height: 657,
    backgroundColor: "rgba(255,255,255,1)"
  },
  protectionAndPriva: {
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    fontSize: 15,
    marginTop: 30,
    marginLeft: 20
  },
  helpProtectYourWe: {
    width: 335,
    height: 447,
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    fontSize: 16,
    marginTop: 25,
    marginLeft: 20
  },
  claimBack: {
    backgroundColor: "transparent",
    color: "rgba(88,80,79,1)",
    opacity: 0.24,
    fontSize: 15,
    marginTop: 20,
    marginLeft: 20
  },
  otherThanTheConte: {
    width: 335,
    height: 68,
    backgroundColor: "transparent",
    color: "rgba(174,184,192,1)",
    opacity: 0.24,
    fontSize: 16,
    marginTop: 25,
    marginLeft: 20
  }
});

export default CardProtectionPrivacy1;
