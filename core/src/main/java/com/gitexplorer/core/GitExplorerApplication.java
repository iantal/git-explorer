package com.gitexplorer.core;

import org.eclipse.egit.github.core.Repository;
import org.eclipse.egit.github.core.client.GitHubClient;
import org.eclipse.egit.github.core.client.GitHubRequest;
import org.eclipse.egit.github.core.client.GitHubResponse;
import org.eclipse.egit.github.core.service.GitHubService;
import org.eclipse.egit.github.core.service.RepositoryService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootApplication
public class GitExplorerApplication {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(GitExplorerApplication.class, args);
    }

}
