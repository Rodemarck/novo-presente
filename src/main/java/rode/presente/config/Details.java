package rode.presente.config;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import rode.presente.database.dao.UserDao;
import rode.presente.model.User;

import java.sql.SQLException;
import java.util.List;

@Component
public class Details implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) {
        try {
            System.out.println("carregando : [" + username + "]");
            User u = UserDao.getByLogin(username);
            System.out.println("e....");
            List<GrantedAuthority> grantedAuthority = AuthorityUtils.createAuthorityList(u.getPermissions());
            return new org.springframework.security.core.userdetails.User(u.getLogin(), u.getPassword(), grantedAuthority);
        } catch (SQLException e) {
            System.out.println("login erro :" + e.getMessage());
            throw new UsernameNotFoundException(e.getMessage());
        }
    }
}
