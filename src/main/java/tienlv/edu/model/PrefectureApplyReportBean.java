package tienlv.edu.model;

public class PrefectureApplyReportBean {
	private String prefecture;
	private int weban;
	private int ukerukun;
	private int baitoru;
	private int mynavi;
	private int jobsense;
	private int rikunavi;

	public String getPrefecture() {
		return prefecture;
	}

	public void setPrefecture(String prefecture) {
		this.prefecture = prefecture;
	}

	public int getWeban() {
		return weban;
	}

	public void setWeban(int weban) {
		this.weban = weban;
	}

	public int getUkerukun() {
		return ukerukun;
	}

	public void setUkerukun(int ukerukun) {
		this.ukerukun = ukerukun;
	}

	public int getBaitoru() {
		return baitoru;
	}

	public void setBaitoru(int baitoru) {
		this.baitoru = baitoru;
	}

	public int getMynavi() {
		return mynavi;
	}

	public void setMynavi(int mynavi) {
		this.mynavi = mynavi;
	}

	public int getJobsense() {
		return jobsense;
	}

	public void setJobsense(int jobsense) {
		this.jobsense = jobsense;
	}

	public int getRikunavi() {
		return rikunavi;
	}

	public void setRikunavi(int rikunavi) {
		this.rikunavi = rikunavi;
	}

	@Override
	public String toString() {
		return "[" + prefecture + "," + weban + "," + ukerukun + "," + baitoru
				+ "," + mynavi + "," + jobsense + "," + rikunavi + "]";
	}

	public Object[] toArray() {
		return new Object[] { prefecture, weban, ukerukun, baitoru, mynavi, jobsense, rikunavi };
	}
}
