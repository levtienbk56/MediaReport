package tienlv.edu.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import tienlv.edu.service.MainService;

@Controller
public class HomeController {

	@Autowired
	MainService mainService;

	@RequestMapping(value = { "", "home", "index" }, method = RequestMethod.GET)
	public String home() {
		return "demoTopPage";
	}

	@RequestMapping(value = "google-chart", method = RequestMethod.GET)
	public String drawGoogleGraph() {
		return "googleChartPage";
	}

	@RequestMapping(value = "chartjs", method = RequestMethod.GET)
	public String drawChartjsGraph() {
		return "chartjsPage";
	}

	@RequestMapping(value = "colors", method = RequestMethod.GET)
	public String getColors() {
		return "colorsPage";
	}

	// @RequestMapping(value = "get-data", method = RequestMethod.POST)
	// public @ResponseBody Object getData(HttpServletRequest request,
	// @RequestParam("graph") String graph) {
	// System.out.println("get data for " + graph);
	//
	// Object[] arr1 = new Object[] { "Year", "Sales", "Expenses" };
	// Object[] arr2 = new Object[] { "2004", 1000, 400 };
	// Object[] arr3 = new Object[] { "2005", 1170, 460 };
	// Object[] arr4 = new Object[] { "2006", 660, 1120 };
	// Object[] arr5 = new Object[] { "2007", 1030, 540 };
	// Object[][] arr = new Object[][] { arr1, arr2, arr3, arr4, arr5 };
	//
	// return arr;
	// }

	@RequestMapping(value = "get-data", method = RequestMethod.POST)
	public @ResponseBody Object[] getData(HttpServletRequest request, @RequestParam("graph") String graph) {
		Object[] arr = mainService.getChartData();
		return arr;
	}

}
