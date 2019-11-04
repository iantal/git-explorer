package com.gitexplorer.core.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeveloperRepository {
    private String name;
    private String description;
    private String url;
}
