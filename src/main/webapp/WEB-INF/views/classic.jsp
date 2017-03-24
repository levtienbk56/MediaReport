<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<html>
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title><tiles:getAsString name="title"></tiles:getAsString></title>

<!-- Bootstrap Core CSS -->
<link
	href="${pageContext.servletContext.contextPath}/resources/vendor/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">

<!-- Custom Fonts -->
<link
	href="${pageContext.servletContext.contextPath}/resources/vendor/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
	rel="stylesheet" type="text/css">
<link href='https://fonts.googleapis.com/css?family=Kaushan+Script'
	rel='stylesheet' type='text/css'>
<link
	href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic'
	rel='stylesheet' type='text/css'>
<link
	href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700'
	rel='stylesheet' type='text/css'>

<!-- Theme CSS -->
<link
	href="${pageContext.servletContext.contextPath}/resources/css/agency.min.css"
	rel="stylesheet">
</head>
<body id="page-top" class="index">

	<!-- jQuery -->
	<script
		src="${pageContext.servletContext.contextPath}/resources/vendor/jquery/jquery.min.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script
		src="${pageContext.servletContext.contextPath}/resources/vendor/bootstrap/js/bootstrap.min.js"></script>

	<!-- Plugin JavaScript -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

	<!-- Contact Form JavaScript -->
	<script
		src="${pageContext.servletContext.contextPath}/resources/js/jqBootstrapValidation.js"></script>
	<script
		src="${pageContext.servletContext.contextPath}/resources/js/contact_me.js"></script>

	<!-- Theme JavaScript -->
	<script
		src="${pageContext.servletContext.contextPath}/resources/js/agency.min.js"></script>

	<!-- Google chart JavaScript -->
	<script src="https://www.google.com/jsapi"></script>

	<!-- jquery map japan -->
	<script
		src="${pageContext.servletContext.contextPath}/resources/vendor/jquery-japan-map/jquery-japan-map.min.js"></script>



	<!-- header -->
	<tiles:insertAttribute name="page-header"></tiles:insertAttribute>

	<!-- body -->
	<tiles:insertAttribute name="page-body"></tiles:insertAttribute>

	<!-- Footer -->
	<tiles:insertAttribute name="page-footer"></tiles:insertAttribute>
</body>

</html>