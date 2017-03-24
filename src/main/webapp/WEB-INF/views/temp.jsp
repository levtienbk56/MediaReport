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

</head>

<body id="page-top" class="index">

	<!-- jQuery -->
	<script
		src="${pageContext.servletContext.contextPath}/resources/vendor/jquery/jquery.min.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script
		src="${pageContext.servletContext.contextPath}/resources/vendor/bootstrap/js/bootstrap.min.js"></script>

	<!-- header -->
	<tiles:insertAttribute name="page-header"></tiles:insertAttribute>

	<!-- body -->
	<tiles:insertAttribute name="page-body"></tiles:insertAttribute>

	<!-- Footer -->
	<tiles:insertAttribute name="page-footer"></tiles:insertAttribute>
</body>

</html>