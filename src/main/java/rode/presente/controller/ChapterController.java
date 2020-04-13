package rode.presente.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import rode.presente.database.dao.StaffDao;
import rode.presente.model.Staff;

import java.sql.SQLException;
import java.util.LinkedList;
import java.util.concurrent.CompletableFuture;

public class ChapterController {
    @GetMapping
    public CompletableFuture<LinkedList<Staff>> list() throws SQLException {
        return CompletableFuture.completedFuture(StaffDao.list());
    }

    @GetMapping("/{id}")
    public CompletableFuture<Staff> getById(@PathVariable int id) throws SQLException {
        return CompletableFuture
                .completedFuture(StaffDao.getById(id));
    }
}
