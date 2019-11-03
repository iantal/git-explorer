package com.gitexplorer.core.data;

<<<<<<< HEAD
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrendingReport implements Serializable {
    private String author;
    private String name;
    private String avatar;
    private String url;
    private String description;
    private String language;
    private String languageColor;
    private int stars;
    private int forks;
    private int currentPeriodStars;
    private List<TrendingReportContributor> builtBy;
=======
import lombok.Data;

@Data
public class TrendingReports {
    private 
>>>>>>> master
}
