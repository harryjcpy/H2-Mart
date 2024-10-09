import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="H² MART"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Us
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
              H² MART is built on a foundation of passion for quality
               products and seamless shopping experiences. Committed to customer 
               satisfaction, we strive to curate a diverse selection of items that
                cater to various tastes and preferences. With a focus on reliability
                 and transparency, we foster trust through clear communication and
                  dependable service. Our dedicated team works tirelessly to ensure
                   every interaction, from browsing to checkout, is smooth and enjoyable.
                    We value our community of shoppers and continuously seek ways to
                     improve and innovate, guided by a shared vision of making online
                      shopping convenient, delightful, and rewarding for all.
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
              H² MART was founded by Harshit Shukla and Harshit Mishra, a talented web developers
                 who are persuing B.Tech from SRMCEM Lucknow.
                they are final year CSE student. They had sold products
                to more than 50 customers till date. Now, they aims to expand
                their business to an international level by launching their own
                website and introducing new and genuine products at
                competitive prices.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          H² MART is a dynamic e-commerce platform dedicated to revolutionizing the way
            you shop online. Committed to providing an unparalleled shopping
             experience, we offer a diverse range of products curated with
              quality and value in mind. Our team is driven by a passion for
               innovation and customer satisfaction, constantly striving to
                exceed expectations.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          With a user-friendly interface and secure payment options,
           we make online shopping easy and enjoyable for everyone. 
           Whether you're a buyer or a seller, we're here to connect
            you with the products and services you need, fostering a
             vibrant online community built on trust and reliability.
              Welcome to our world of limitless possibilities.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            At H² Mart, we believe in fostering long-term relationships
            with our customers. We provide excellent customer service and strive
            to exceed expectations at every step. We are committed to delivering
            a seamless online shopping experience and ensuring customer
            satisfaction. Join us on this exciting journey as we continue to
            grow and expand our reach in the world of cricket.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          Our mission is to revolutionize the online shopping experience
           by providing unparalleled convenience, choice, and value to our
            customers. We aim to empower individuals and businesses alike
             to discover, purchase, and sell products effortlessly on our platform.
              Committed to innovation and customer-centricity, we continuously
               seek to enhance our services, leveraging cutting-edge technology
                and data-driven insights.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          We strive to foster a vibrant and inclusive online community,
           where trust, integrity, and transparency are paramount.
            Through our unwavering dedication to excellence, we aspire
             to be the premier destination for all online shopping needs,
              enriching lives and driving positive change in the digital marketplace.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
