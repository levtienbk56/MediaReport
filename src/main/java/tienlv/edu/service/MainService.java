package tienlv.edu.service;

import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Calendar;
import java.util.List;

import org.springframework.stereotype.Service;

import com.opencsv.CSVReader;
import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.CsvToBean;

import tienlv.edu.model.PrefectureApplyReportBean;

@Service
public class MainService {

	public void init() {

	}

	public String getDayString() {
		int today;
		Calendar calendar = Calendar.getInstance();
		today = calendar.get(Calendar.DAY_OF_WEEK);

		switch (today) {
		case 1:
			return "SUNDAY";
		case 2:
			return "MONDAY";
		case 3:
			return "TUESDAY";
		case 4:
			return "WEDNESDAY";
		case 5:
			return "THURSDAY";
		case 6:
			return "FRIDAY";
		case 7:
			return "SATURDAY";
		}

		return null;
	}

	public Object[] getChartData() {
		CSVReader reader;
		List<PrefectureApplyReportBean> list = null;
		String[] columns = null;
		try {
			reader = new CSVReader(new InputStreamReader(new FileInputStream("C:/dev/report/data.csv"), "UTF-8"), ',', '"');

			ColumnPositionMappingStrategy<PrefectureApplyReportBean> strat = new ColumnPositionMappingStrategy<PrefectureApplyReportBean>();
			strat.setType(PrefectureApplyReportBean.class);
			columns = new String[] { "prefecture", "ukerukun", "weban", "baitoru", "mynavi", "jobsense", "rikunavi" };
			strat.setColumnMapping(columns);

			CsvToBean<PrefectureApplyReportBean> csv = new CsvToBean<>();
			list = csv.parse(strat, reader);
			//printout(list);
		} catch (Exception e) {
			e.printStackTrace();
		}

		Object[] arr = new Object[list.size() + 1];

		arr[0] = columns;
		int i = 1;
		for (PrefectureApplyReportBean row : list) {
			arr[i] = row.toArray();
			i++;
		}

		return arr;
	}

	private void printout(List<PrefectureApplyReportBean> list) {
		for (PrefectureApplyReportBean bean : list) {
			System.out.println(bean.toString());
		}
	}
}
