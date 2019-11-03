package com.gitexplorer.core.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrendingReportContributor implements Serializable {
    private String username;
    private String href;
    private String avatar;
}
